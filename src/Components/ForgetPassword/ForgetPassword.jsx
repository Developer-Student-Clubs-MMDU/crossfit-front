import React from 'react'

const ForgetPassword = () => {
  return (
    <div className="otp-main-div">
      <div className="otp-head-div">
        <img
          className="sign-up-page-img"
          src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png"
          alt=""
        />
      </div>
      <div className="sign-up-main">
      <div className='sign-up-main-left'>
                <p className='sign-up-left-welcome'>Tera Bhai Sambhal lega</p>
                <p className='sign-up-left-para'>Recover Your Account, Reset your password</p>
            </div>
      <div className='sign-up-main-right' >
                <p className='sign-up-right-signin'>Forget Password</p>
                
                <div className='sign-up-right-input-parent-div'> 

                    
                        <p className='sign-up-page-input-fields-desc'>Email Address</p>
                        <input className='sign-up-page-input-fields' type="email" />
                   

                   <div className='sign-up-page-submit-btn-div'>
                   <button className='sign-up-button'>Send Mail</button>
                   </div>
                </div>
            </div>

      </div>
    </div>
  )
}

export default ForgetPassword