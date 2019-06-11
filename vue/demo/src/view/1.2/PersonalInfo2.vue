<template>
    <div>
        <select
                :value="value.areaCode"
                placeholder="区号"
                @change="areaCodeChange"
        >
            <option value="+86">+86</option>
            <option value="+60">+60</option>
        </select>
    </div>
</template>

<script>
  export default {
    name: 'PersonalInfo2',
    props: {
      value: Object,
    },
    methods:{
      areaCodeChange(e){
        this.$emit("input", {
          ...this.value,
          areaCode: e.target.value
        });
      }
    }
  }
</script>

<style scoped>

</style>