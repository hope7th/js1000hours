<template>
    <div>
        <!--<personal-info v-model="phoneInfo">-->

        <!--</personal-info>-->
        <personal-info
                :phone-info="phoneInfo"
                :zip-code="zipCode"
                @change="val=>(phoneInfo=val)"
        >

        </personal-info>
        phoneInfo:{{ phoneInfo }}
        <br/>
        zipCode:{{ zipCode }}
    </div>

</template>

<script>
    import PersonalInfo from './PersonalInfo'
    export default {
        name: "index",
        components:{
            PersonalInfo
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