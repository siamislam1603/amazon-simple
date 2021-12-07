export const inputValidation=([event,validation,setValidation])=>{
    const e = event.target;
    let isValid;
    if (e.type === "email") {
      const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = re.test(String(e.value).toLowerCase());
    }
    else
      isValid=e.value.length >= 8;
    if(e.value.length===0)
      isValid='default';
    const newValidation={...validation};
    newValidation[e.type+'Value']=e.value;
    if(!isValid){
      newValidation[e.type]=' is-invalid';
      newValidation[e.type+'Feedback']=' d-block';
    }
    else if(isValid==='default'){
      newValidation[e.type]='';
      newValidation[e.type+'Feedback']='';
    }
    else{
      newValidation[e.type]=' is-valid';
      newValidation[e.type+'Feedback']='';
    }
    setValidation(newValidation);
};