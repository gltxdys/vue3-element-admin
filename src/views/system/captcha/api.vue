<!--字典类型-->
<script setup lang="ts">
import {addCaptcha, captchaDetailApi, delCaptchaApi, updateCaptchaApi,} from "@/api/captcha";
import {CaptchaType, ParamVo} from "@/api/captcha/types";
import MultiUpload from "@/components/Upload/MultiUpload.vue";

defineOptions({
  name: "DictType",
  inheritAttrs: false,
});

const dataFormRef = ref(ElForm);
const loading = ref(false);
const ids = ref<number[]>([]);

const dialog = reactive({
  title: "",
  visible: false,
});
let isEdit = false;
let formData = reactive<CaptchaType>({
  typeId: 0,
  typeName: "",
  details: "",
  price: 0,
  exampleUrl: [],
  repParam: [],
  reqParam: [],
});

const rules = reactive({
  typeName: [{required: true, message: "请输入类型名称", trigger: "blur"}],
  typeId: [{required: true, message: "请输入类型编码", trigger: "blur"}],
  price: [{required: true, message: "请输入价格", trigger: "blur"}],
  reqParam: [{required: true, message: "请输入类型编码", trigger: "blur"}],
});


/** 行复选框选中  */
function handleSelectionChange(selection: any) {
  ids.value = selection.map((item: any) => item.typeId);
}

/**
 * 打开字典类型表单弹窗
 *
 * @param dicTypeId 字典类型ID
 */
function openDialog() {
  dialog.visible = true;
  dialog.title = "新增验证码类型";
}

/** 字典类型表单提交 */
function handleSubmit() {
  dataFormRef.value.validate((isValid: boolean) => {
    if (isValid) {
      loading.value = false;
      if (isEdit) {
        updateCaptchaApi(formData)
          .then(() => {
            ElMessage.success("修改成功");
            closeDialog();
            initApi();
          })
          .finally(() => (loading.value = false));
      } else {
        addCaptcha(formData)
          .then(() => {
            ElMessage.success("新增成功");
            closeDialog();
            initApi();
          })
          .finally(() => (loading.value = false));
      }
    }
  });
}

/** 关闭字典类型弹窗 */
function closeDialog() {
  dialog.visible = false;
  resetForm();
}

/**  重置字典类型表单 */
function resetForm() {
  dataFormRef.value.resetFields();
  dataFormRef.value.clearValidate();
  formData = {};
  formData.typeId = undefined;
}

/** 删除验证码类型 */
function handleDelete(typeId?: number) {
  const typeIds: number[] = [];
  if (typeId) {
    typeIds.push(typeId);
  } else {
    ids.value.forEach((item) => typeIds.push(item));
  }
  if (!typeIds) {
    ElMessage.warning("请勾选删除项");
    return;
  }

  ElMessageBox.confirm("确认删除已选中的数据项?", "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    delCaptchaApi(typeIds).then(() => {
      ElMessage.success("删除成功");
      initApi();
    });
  });
}

let captchaList = ref<CaptchaType[]>();

function initApi() {
  loading.value = true;
  captchaDetailApi()
    .then(({data}) => {
      captchaList.value = data;
    })
    .finally(() => {
      loading.value = false;
    });
}

function addReq() {
  formData.reqParam.push({});
}

function removeReq(item: ParamVo) {
  const index = formData.reqParam.indexOf(item);
  if (index !== -1) {
    formData.reqParam.splice(index, 1);
  }
}

function openEditDialog(data: CaptchaType) {
  dialog.visible = true;
  dialog.title = "修改验证码类型";
  Object.assign(formData, data);
  isEdit = true;
}

onMounted(() => {
  initApi();
});
</script>

<template>
  <div class="app-container">
    <el-card shadow="never" class="table-container">
      <template #header>
        <el-button
          v-hasPerm="['sys:dict_type:add']"
          type="success"
          @click="openDialog()"
        >
          <i-ep-plus/>
          新增
        </el-button
        >
        <el-button
          type="danger"
          :disabled="ids.length === 0"
          @click="handleDelete()"
        >
          <i-ep-delete/>
          删除
        </el-button
        >
      </template>
      <el-table
        v-loading="loading"
        highlight-current-row
        :data="captchaList"
        border
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"/>
        <el-table-column label="类型编码" prop="typeId" width="200"/>
        <el-table-column label="类型名称" prop="typeName" width="200"/>
        <el-table-column label="状态" align="center" width="100">
          <template #default="scope">
            <el-tag v-if="scope.row.status === 1" type="info">禁用</el-tag>
            <el-tag v-else type="success">启用</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="单次消耗积分" prop="price" align="center"/>
        <el-table-column fixed="right" label="操作" align="center" width="220">
          <template #default="scope">
            <el-button
              v-hasPerm="['sys:dict_type:edit']"
              type="primary"
              link
              size="small"
              @click.stop="openEditDialog(scope.row)"
            >
              <i-ep-edit/>
              编辑
            </el-button
            >
            <el-button
              v-hasPerm="['sys:dict_type:delete']"
              type="primary"
              link
              size="small"
              @click.stop="handleDelete(scope.row.typeId)"
            >
              <i-ep-delete/>
              删除
            </el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      width="500px"
      @close="closeDialog"
    >
      <el-form
        ref="dataFormRef"
        :model="formData"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="类型名称" prop="typeName">
          <el-input v-model="formData.typeName" placeholder="请输入类型名称"/>
        </el-form-item>
        <el-form-item label="类型编码" prop="typeId">
          <el-input v-model="formData.typeId" placeholder="请输入类型编码"/>
        </el-form-item>
        <el-form-item label="类型描述" prop="details">
          <el-input v-model="formData.details" placeholder="请输入类型描述"/>
        </el-form-item>
        <el-form-item label="单次价格" prop="price">
          <el-input v-model="formData.price" placeholder="请输入价格"/>
        </el-form-item>
        <el-form-item label="示例图片">
          <multi-upload v-model="formData.exampleUrl"/>
        </el-form-item>
        <el-form-item
          v-for="(domain, index) in formData.reqParam"
          :key="index"
          :label="'参数 ' + index"
          :prop="'domains.' + index + '.value'"
        >
          <div class="req">
            <el-input v-model="domain.name" placeholder="参数名称"/>
            <el-input v-model="domain.type" placeholder="类型"/>
            <el-input v-model="domain.value" placeholder="说明"/>
            <el-button class="mt-2" @click.prevent="removeReq(domain)">
              删除
            </el-button>
          </div>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="addReq">添加请求参数</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
          <el-button @click="closeDialog">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.req {
  display: flex;
  gap: 5px;
}
</style>
