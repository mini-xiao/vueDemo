<template>
  <div class="hello">
    <div>
      <h3>添加商品</h3>
      <label for="">商品名称</label>
      <input type="text" v-model="data.name">
      <label for="">商品价格</label>
      <input type="text" v-model="data.price">
      <label for="">库存数量</label>
      <input type="number" v-model="data.num">
      <button @click="onAdd()">添加</button>
      <button @click="onReset()">重置</button>
    </div>
    
    <div>
      <h3>商品列表</h3>
      <table  class="todolist-table">
        <thead>
          <tr>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>商品数量</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.num}}</td>
            <td>
              <button @click="onDelete(item,index)">删除</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      data:{
        name:"",
        price:"",
        num:""
      },
      list:[]
    }
  },

  methods:{
    onAdd(){
      var data = Object.assign({},this.data);
      this.list.push(data);
    },
      onReset(){
      this.data.name = "";
      this.data.num = "";
      this.data.price = "";
    },
    onDelete(item,index){
      this.list.splice(index,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todolist-table{
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}
.todolist-table th,
.todolist-table td{
  padding: 5px;
  border: 1px solid #eee;
}
</style>
