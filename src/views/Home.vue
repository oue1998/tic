<template>
  <div class="Home">
    <div class="font">
      <div>
        เชื่อหรือไม่? ว่ากระดาษแผ่นนี้ยังไม่เคยเล่นเกม O,X แพ้ใครเลย
      </div>
      <div>เรามาลองพิสูจน์กัน ลองมาเล่นแข่งกับกระดาษแผ่นนี้ดู</div>
    </div>
    <button id="nav"><router-link to="/about">START</router-link></button>
  </div>
</template>
<style scoped>
.font {
  font-family: "Sriracha", cursive;
  color: black;
  font-size: 40px;
  margin-top: 100px;
}

#nav {
  margin-top: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #e8505b;
  font-family: "Sriracha", cursive;
  font-size: 30px;
  border:  #e8505b;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
