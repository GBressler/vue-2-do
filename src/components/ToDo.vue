<template>
  <div class="ToDo">
    <div class="holder">
      <form @submit.prevent="addTask">
      <input type="text" placeholder="Add something to the To Do list" v-model="task" name="task">
      </form>
      <p><span>Here are the things you have to do today:</span></p>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in tasks" :key='index' > {{ data.task }} 
            <i class="fa fa-trash" v-on:click="removeTask(index)"></i></li>
        </transition-group>
      </ul>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data() {
    return {
      checked: false,
      task: '',
      tasks: [
      {"task": "Make coffee."},
      {"task": "Fight crime."},
      {"task": "Get some sleep."},
      ]
      }
    },
     methods : {
      addTask(){
          this.tasks.push({task: this.task});
          this.task = '';
      },
      removeTask(id){
          this.tasks.splice(id,1);
      }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #FF6666;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 10px 0;
    color: gray;
  }

  p span {
    font-weight: bold;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: 100%;
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

i {
  float: right;
  cursor: pointer;
}

</style>


