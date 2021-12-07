export const handleEmailSubmission = ([email, password, userEmailAuth,userEmailInfo,setUserEmailInfo,auth,isLogin,setShowOnSubmitMsg]) => {
      userEmailAuth(auth, email, password)
        .then((userCredential) => {
          const newUser = userCredential.user;
          console.log(newUser);
          const userEmail = userEmailInfo;
          userEmail.msg = isLogin
            ? "Logged in successfully."
            : "Account created successfully";
          userEmail.type = "success";
          userEmail.email = newUser.email;
          setUserEmailInfo(userEmail);
          setShowOnSubmitMsg(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const userEmail = { ...userEmailInfo };
          userEmail.msg = errorCode;
          userEmail.type = "danger";
          setUserEmailInfo(userEmail);
          setShowOnSubmitMsg(true);
        });
};