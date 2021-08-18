<template>
  <div class="signup-page">
    <div class="image"></div>
    
    <div class="content">
      <h1 class="mb-4">stripe</h1>
      <form class="form">
        <h3>Sign in to your account</h3>

        <div class="form-group">
          <label>Email</label>
          <input type="text" placeholder="jane.doe@gmail.com" class="signup-input" />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" class="signup-input" />
          <img src="../assets/image/eye-icon.svg" alt="eye icon" />
        </div>

        <div class="form-group align-items-baseline d-flex">
          
          <label for="checkbox"><input type="checkbox" id="checkbox" style="margin-right: .5rem" /><span></span> Stay signed in for a week</label>
        </div>

        <div class="form-group">
          <router-link to="/dashboard" class="form-group">
            <button type="submit">Continue</button>
          </router-link>
        </div>

        <a class="d-flex justify-content-center text-decoration-none" href="/">Use single sign-on (SSO) instead</a>
      </form>

      <div class="footer-link mt-4">
        <a href="/" class="text-decoration-none">Don't have an account? Sign up</a>

        <ul class="d-flex mt-2">
          <li>&copy; Stripe</li>
          <li>Contact</li>
          <li>Privacy &amp; terms</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data:() => ({
    // submitStatus: null
  }),
  methods: {
    //
  }
}
</script>

<style lang="scss">
.signup-page{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .image{
    width: 100%;
    height: 100%;
    background-image: url("../assets/image/Geometric-patterns.png");
    background-repeat: no-repeat;
  }

  .content {
    position: absolute;
    z-index: 1000 !important;

    h1 {
      color: #000000;
    }

    .form {
      width: 400px;
      height: 400px;
      background: #FFFFFF;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12), 0px 15px 35px rgba(60, 66, 87, 0.08);
      border-radius: 4px;
      padding: 48px 68px 72px;

      h3 {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 1rem;
        color: #3C4257;
      }

      a {
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #635CFF;
      }

      .form-group {
        margin-bottom: 15px;
        position: relative;

        label {
          font-family: SF Pro Text;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #3C4257;
          margin-bottom: 5px;
        }

        .signup-input {
          width: 100%;
          padding: 4px 12px;
          height: 36px;
          border: 1px solid #E3E8EE;
          border-radius: 5px;

          &:focus {
            outline: none;
          }
        }

        input[type="checkbox"] {
          display: none;
        }
        label input[type="checkbox"] ~ span {
          display: inline-block;
          width: 12px;
          height: 12px;
          // vertical-align: top;
          border: 1px solid #635CFF;
          //box-sizing: content-box;
          //-moz-box-sizing: content-box;
          // margin-top: 3px;
        }
        label input[type="checkbox"] ~ span {
          border-radius: 3px;
        }
        label input[type="checkbox"]:checked ~ span {
          background-color: #635CFF;
        }

        /* input[type="checkbox"]:checked {
          border-color: red !important;
          color: red !important;
          background-color:red !important;
        } */

        img {
          position: absolute;
          right: 8px;
          bottom: 10px;
        }

        button {
          width: 100%;
          height: 46px;
          border: 0;
          color: #FFFFFF;
          background: #635CFF;
          border-radius: 5px;
        }
      }
    }

    .footer-link {
      margin-left: 19px;
      a {
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #4F566B;
      }

      ul {
        padding-left: 0;

        li {
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #697386;

          &:first-child {
            list-style: none !important;
          }
        }
      }
    }
  }
}
</style>