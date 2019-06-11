<template>
    <div>
        <personal-info v-model="phoneInfo">

        </personal-info>
        <!--v-model其实如下实现-->
        <!--:value="something"-->
        <!--@:input="something = $event.target.value"-->
        <personal-info
                :phone-info="phoneInfo"
                :zip-code="zipCode"
                @change="val=>(phoneInfo=val)"
        >

        </personal-info>

        phoneInfo:{{ phoneInfo }}
        <br/>
        zipCode:{{ zipCode }}
        <h4> v-model其实如下实现
            :value="something"
            @:input="something = $event.target.value"
        </h4>
        <personal_info2 v-model="phoneInfo"></personal_info2>
    </div>

</template>

<script>
    import PersonalInfo from './PersonalInfo'
    import personal_info2 from "./PersonalInfo2"
    export default {
        name: "index",
        components:{
            PersonalInfo,
            personal_info2
        },
        data(){
            return {
                phoneInfo: {
                    areaCode: "+86",
                    phone: ""
                },
                zipCode: ""
            }
        }
    }
</script>

<style scoped>

</style>