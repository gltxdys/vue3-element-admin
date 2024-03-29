<template>
  <div class="form-container">
    <el-card shadow="never" style="margin: 10px">
      <el-table
        ref="dataTableRef"
        v-loading="loading"
        :data="orderList"
        highlight-current-row
        border
      >
        <el-table-column label="订单编号" prop="tradeNo" width="100"/>
        <el-table-column label="金额" prop="money" width="150"/>
        <el-table-column label="积分" prop="score" width="150"/>
        <el-table-column label="下单时间" prop="createTime" min-width="160"/>
        <el-table-column label="支付时间" prop="payTime" min-width="160"/>
        <el-table-column label="充值方式" prop="payType" width="100"/>
        <el-table-column label="状态" align="center" width="100">
          <template #default="scope">
            <el-tag v-if="scope.row.status === 1" type="success">正常</el-tag>
            <el-tag v-else type="info">禁用</el-tag>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        v-if="total > 0"
        v-model:total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="handleQuery"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {TradeVo} from "@/api/pay/types";
import {getTradeList} from "@/api/pay";

const loading = ref(false);
const queryParams = {
  pageNum: 1,
  pageSize: 20,
  userId: 2,
};
let total = ref(0);
let orderList = ref<TradeVo[]>();

function handleQuery() {
  getTradeList(queryParams).then((res) => {
    orderList.value = res.data.list;
    total.value = res.data.total;
    console.log(res.data.total);
  });
}

onMounted(() => {
  handleQuery();
});
</script>

<style scoped lang="scss"></style>
