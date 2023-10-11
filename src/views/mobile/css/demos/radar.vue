<template>
  <div class="page radar-page">
   <div class="container yl-flex yl-jac">
    <div class=" radar">

    </div>

   </div>

  </div>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
.radar-page{
    .container{
        background:#000;
        height: 100%;
        .radar{
            width:260px;
            height:260px;
            position:relative;
            background:repeating-radial-gradient(
                transparent 0, 
                transparent 12px,
                #43768e 12px,
                #437683 13px
            ),
            linear-gradient(
                90deg,
                transparent 49.8%,
                #43768e 49.8%,
                #43768e 50.3%,
                transparent 50.3%
            ),
            linear-gradient(
                transparent 49.8%,
                #43768e 49.8%,
                #43768e 50.3%,
                transparent 50.3%
            );
            border-radius: 50%;
            &::before{
                content: '';
                position: absolute;
                width: 130px;
                height: 130px;
                background: linear-gradient(
                    45deg,
                    rgba(0,0,0,0) 50%,
                    rgba(107,183,208,1) 100%
                );
                border-radius: 100% 0 0 0;
                animation: scanning 3s linear infinite;
                transform-origin: bottom right;
            }
            &::after{
                content: '';
                width: 0;
                height: 0;
                opacity: 0.5;
                position: absolute;
                left: 50%;
                top: 50%;
                background-color: rgba(107,183,208,1);
                border-radius: 50%;
                transform: translate(-50%,-50%);
                animation: scale 3s ease-in infinite;
            }

             
        }
        

    }
    @keyframes scanning {
        to{
            transform: rotate(360deg);
        }
    }
    @keyframes scale {
        60%,100%{
            width: 400px;
            height: 400px;
            opacity: 0;
        }
        
    }
}
</style>