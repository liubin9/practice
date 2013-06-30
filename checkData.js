
//У����ͨ�绰��������룺���ԡ�+����ͷ���������⣬�ɺ��С�-��
function isTel(str) {
	var reg=/^([0-9]|[\-])+$/g ;
    if(str.length<7 || str.length>20){
     return false;
    }
    else{
      return reg.exec(str);
    }

}

//У��(����)��������
function isPostalCode(s) {

 var pattern =/^[0-9]{6}$/;
 if(s!="") {
     if(!pattern.exec(s)) {
    	 return false;
     }
 }
 return true;
}
            
/* 
��;������ʼ���ַ�Ƿ���ȷ 
���룺 
s���ַ��� 
���أ� ���ͨ����֤����true,���򷵻�false 
*/
function chkemail(email)
{
    var re = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (re.test(email))
        return true;
    else 
        return false;
}



//----------------------------------------------------
//������ڵ����������ϡ�yyyy-mm-dd���ĸ�ʽ
//-----------------------------------------------------
function CheckDate(strDate){
     var strSeparator = "-"; //���ڷָ���
     var strDateArray;
     var intYear;
     var intMonth;
     var intDay;
     var boolLeapYear;

     strDateArray = strDate.split(strSeparator);

     if(strDateArray.length!=3){

          return false;
     }

     intYear = parseInt(strDateArray[0],10);
     intMonth = parseInt(strDateArray[1],10);
     intDay = parseInt(strDateArray[2],10);

     if(isNaN(intYear)||isNaN(intMonth)||isNaN(intDay)){
           return false;
     }
     if(intYear>2050 ||intYear<1940){
           return false
     }
     if(intMonth>12||intMonth<1){
           return false;
     }
     if((intMonth==1||intMonth==3||intMonth==5||intMonth==7||intMonth==8||intMonth==10||intMonth==12)&&(intDay>31||intDay<1)){
           return false;
     }
     if((intMonth==4||intMonth==6||intMonth==9||intMonth==11)&&(intDay>30||intDay<1)){
           return false;
     }
     if(intMonth==2){
        if(intDay<1){

            return false;
        }
        boolLeapYear = false;
        if((intYear%100)==0){
           if((intYear%400)==0) boolLeapYear = true;
        }
        else{
           if((intYear%4)==0) boolLeapYear = true;
        }

        if(boolLeapYear){
           if(intDay>29){

              return false;
          }
        }
        else{
           if(intDay>28){

              return false;
           }
        }
     }
     return true;
}
//----------------------------------------------------
//�ж�����
//-----------------------------------------------------
function checkDateMonth(startTimeYear, startTimeMonth, endTimeYear, endTimeMonth){
	var myDate = new Date();
	var tempNowYear = myDate.getFullYear();
	var tempNowMonth = myDate.getMonth() + 1;

	if (parseInt(startTimeYear) > parseInt(tempNowYear)) {
		alert("��ʼ���ڲ��ܴ��ڵ�ǰ���ڡ�");
		return false;
	}  else if (parseInt(startTimeYear) == parseInt(tempNowYear)) {
		if (parseInt(startTimeMonth) > parseInt(tempNowMonth)) {
			alert("��ʼ���ڲ��ܴ��ڵ�ǰ���ڡ�");
			return false;
		}
	}
	
	if (parseInt(endTimeYear) > parseInt(tempNowYear)) {
		alert("�������ڲ��ܴ��ڵ�ǰ���ڡ�");
		return false;
	}  else if (parseInt(endTimeYear) == parseInt(tempNowYear)) {
		if (parseInt(endTimeMonth) > parseInt(tempNowMonth)) {
			alert("�������ڲ��ܴ��ڵ�ǰ���ڡ�");
			return false;
		}
	}
	
	if (parseInt(startTimeYear) > parseInt(endTimeYear))
	{
		alert("��ʼ���ڲ��ܴ��ڽ������ڡ�");
		return false;
	} else if (parseInt(startTimeYear) == parseInt(endTimeYear)) {
		if (parseInt(startTimeMonth) > parseInt(endTimeMonth)) {
			alert("��ʼ���ڲ��ܴ��ڽ������ڡ�");
			return false;
		} else {			
			if ((parseInt(endTimeMonth) - parseInt(startTimeMonth)) > 5) {
				alert("��ѯ���ڲ��ܴ���6���¡�");
				return false;
			}
		}
	} else {
		if ((parseInt(endTimeYear) - parseInt(startTimeYear)) > 1){
			alert("��ѯ���ڲ��ܴ���6���¡�");
			return false;
		} else {
			var time1 = (12 - parseInt(startTimeMonth));
			var time2 = endTimeMonth;
			var tempMonth = (parseInt(time1) + parseInt(time2));
			if (tempMonth > 5 ) {
				alert("��ѯ���ڲ��ܴ���6���¡�");
				return false;
			}
		}
	}
	var nowDate = Date.parse(tempNowMonth+'/'+ '01' +'/'+tempNowYear);
	var startDate = Date.parse(startTimeMonth + '/'+ '01' +'/'+ startTimeYear);
	var cha=((nowDate-startDate)/86400000); 
	var days = Math.abs(cha);
	if (days > 180) {
		alert("��ѯ��ʼ���ڲ��ܴ��ڵ�ǰ6���¡�");
		return false;
	}
	return true;
}
function checkDateMonth2(startTimeYear, startTimeMonth, endTimeYear, endTimeMonth){
	var myDate = new Date();
	var tempNowYear = myDate.getFullYear();
	var tempNowMonth = myDate.getMonth() + 1;

	if (parseInt(startTimeYear) > parseInt(tempNowYear)) {
		alert("��ʼ���ڲ��ܴ��ڵ�ǰ���ڡ�");
		return false;
	}  else if (parseInt(startTimeYear) == parseInt(tempNowYear)) {
		if (parseInt(startTimeMonth) > parseInt(tempNowMonth)) {
			alert("��ʼ���ڲ��ܴ��ڵ�ǰ���ڡ�");
			return false;
		}
	}
	
	if (parseInt(endTimeYear) > parseInt(tempNowYear)) {
		alert("�������ڲ��ܴ��ڵ�ǰ���ڡ�");
		return false;
	}  else if (parseInt(endTimeYear) == parseInt(tempNowYear)) {
		if (parseInt(endTimeMonth) >= parseInt(tempNowMonth)) {
			alert("�������ڲ��ܴ��ڵ��ڵ�ǰ���ڡ�");
			return false;
		}
	}
	
	if (parseInt(startTimeYear) > parseInt(endTimeYear))
	{
		alert("��ʼ���ڲ��ܴ��ڽ������ڡ�");
		return false;
	} else if (parseInt(startTimeYear) == parseInt(endTimeYear)) {
		if (parseInt(startTimeMonth) > parseInt(endTimeMonth)) {
			alert("��ʼ���ڲ��ܴ��ڽ������ڡ�");
			return false;
		} else {			
			if ((parseInt(endTimeMonth) - parseInt(startTimeMonth)) > 5) {
				alert("��ѯ���ڲ��ܴ���6���¡�");
				return false;
			}
		}
	} else {
		if ((parseInt(endTimeYear) - parseInt(startTimeYear)) > 1){
			alert("��ѯ���ڲ��ܴ���6���¡�");
			return false;
		} else {
			var time1 = (12 - parseInt(startTimeMonth));
			var time2 = endTimeMonth;
			var tempMonth = (parseInt(time1) + parseInt(time2));
			if (tempMonth > 5 ) {
				alert("��ѯ���ڲ��ܴ���6���¡�");
				return false;
			}
		}
	}
	//var nowDate = Date.parse(tempNowMonth+'/'+ '01' +'/'+tempNowYear);
	var endDate = Date.parse(endTimeMonth + '/'+ '01' +'/'+ endTimeYear);
	var startDate = Date.parse(startTimeMonth + '/'+ '01' +'/'+ startTimeYear);
	var cha=((endDate-startDate)/86400000); 
	var days = Math.abs(cha);
	if (days > 180) {
		alert("��ѯ��ʼ���ڲ��ܴ��ڽ�������6���¡�");
		return false;
	}
	return true;
}
function checkDateMonth3(startTimeYear, startTimeMonth, endTimeYear, endTimeMonth){
	var myDate = new Date();
	var tempNowYear = myDate.getFullYear();
	var tempNowMonth = myDate.getMonth() + 1;

	if (parseInt(startTimeYear) > parseInt(tempNowYear)) {
		alert("��ʼ���ڲ��ܴ��ڵ�ǰ���ڡ�");
		return false;
	}  else if (parseInt(startTimeYear) == parseInt(tempNowYear)) {
		if (parseInt(startTimeMonth) > parseInt(tempNowMonth)) {
			alert("��ʼ���ڲ��ܴ��ڵ�ǰ���ڡ�");
			return false;
		}
	}
	
	if (parseInt(endTimeYear) > parseInt(tempNowYear)) {
		alert("�������ڲ��ܴ��ڵ�ǰ���ڡ�");
		return false;
	}  else if (parseInt(endTimeYear) == parseInt(tempNowYear)) {
		if (parseInt(endTimeMonth) > parseInt(tempNowMonth)) {
			alert("�������ڲ��ܴ��ڵ�ǰ���ڡ�");
			return false;
		}
	}
	
	if (parseInt(startTimeYear) > parseInt(endTimeYear))
	{
		alert("��ʼ���ڲ��ܴ��ڽ������ڡ�");
		return false;
	} else if (parseInt(startTimeYear) == parseInt(endTimeYear)) {
		if (parseInt(startTimeMonth) > parseInt(endTimeMonth)) {
			alert("��ʼ���ڲ��ܴ��ڽ������ڡ�");
			return false;
		} else {			
			if ((parseInt(endTimeMonth) - parseInt(startTimeMonth)) > 5) {
				alert("��ѯ���ڲ��ܴ���6���¡�");
				return false;
			}
		}
	} else {
		if ((parseInt(endTimeYear) - parseInt(startTimeYear)) > 1){
			alert("��ѯ���ڲ��ܴ���6���¡�");
			return false;
		} else {
			var time1 = (12 - parseInt(startTimeMonth));
			var time2 = endTimeMonth;
			var tempMonth = (parseInt(time1) + parseInt(time2));
			if (tempMonth > 5 ) {
				alert("��ѯ���ڲ��ܴ���6���¡�");
				return false;
			}
		}
	}
	//var nowDate = Date.parse(tempNowMonth+'/'+ '01' +'/'+tempNowYear);
	var endDate = Date.parse(endTimeMonth + '/'+ '01' +'/'+ endTimeYear);
	var startDate = Date.parse(startTimeMonth + '/'+ '01' +'/'+ startTimeYear);
	var cha=((endDate-startDate)/86400000); 
	var days = Math.abs(cha);
	if (days > 180) {
		alert("��ѯ��ʼ���ڲ��ܴ��ڽ�������6���¡�");
		return false;
	}
	var nowDate = Date.parse(tempNowMonth-1+'/'+ '01' +'/'+tempNowYear);

	 cha=((nowDate-startDate)/86400000); 
	 days = Math.abs(cha);
	if (days > 180) {
		alert("��ѯ��ʼ���ڲ��ܴ��ڵ�ǰ6���¡�");
		return false;
	}
	
	return true;
}
// �Ƚ��������ڵĴ�С
function compareDate(DateOne,DateTwo)
{ 

var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ("-"));
var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ("-")+1);
var OneYear = DateOne.substring(0,DateOne.indexOf ("-"));

var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ("-"));
var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ("-")+1);
var TwoYear = DateTwo.substring(0,DateTwo.indexOf ("-"));

if (Date.parse(OneMonth+"/"+OneDay+"/"+OneYear) > Date.parse(TwoMonth+"/"+TwoDay+"/"+TwoYear))
{
return 1;
}
else if (Date.parse(OneMonth+"/"+OneDay+"/"+OneYear) == Date.parse(TwoMonth+"/"+TwoDay+"/"+TwoYear))
{
return 0;
}
else
{
	return -1;
}

}

//������������������ĺ���
function DateDiff(sDate1, sDate2){  //sDate1��sDate2��2002-12-18��ʽ
    var aDate, oDate1, oDate2, iDays;
    aDate = sDate1.split("-");
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);  //ת��Ϊ12-18-2002��ʽ
    aDate = sDate2.split("-");
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 /24);  //�����ĺ�����ת��Ϊ����
    return iDays;
}


//������֤�ĺϷ���
//У�����֤����
function CheckIdentityCard(idCard,comments){
  var id=idCard;
  var id_length=id.length;

  if (id_length==0){
      alert("���������֤����!");
      return false;
  }

  if (id_length!=15 && id_length!=18){
      alert("���֤���볤��ӦΪ15λ��18λ��");
      return false;
  }

  if (id_length==15){
      yyyy="19"+id.substring(6,8);
      mm=id.substring(8,10);
      dd=id.substring(10,12);

      if (mm>12 || mm<=0){
          alert("�������֤��,�·ݷǷ���");
          return false;
      }

      if (dd>31 || dd<=0){
          alert("�������֤��,���ڷǷ���");
          return false;
      }

      birthday=yyyy+ "-" +mm+ "-" +dd;

      if ("13579".indexOf(id.substring(14,15))!=-1){
          sex="1";
      }else{
          sex="2";
      }
  }else if (id_length==18){
      if (id.indexOf("X") > 0 && id.indexOf("X")!=17 || id.indexOf("x")>0 && id.indexOf("x")!=17){
          alert("���֤��\"X\"����λ�ò���ȷ��");
          return false;
      }

      yyyy=id.substring(6,10);
      if (yyyy>2200 || yyyy<1900){
          alert("�������֤��,��ȷǷ���");
          return false;
      }

      mm=id.substring(10,12);
      if (mm>12 || mm<=0){
          alert("�������֤��,�·ݷǷ���");
          return false;
      }

      dd=id.substring(12,14);
      if (dd>31 || dd<=0){
          alert("�������֤��,���ڷǷ���");
          return false;
      }

      if (id.charAt(17)=="x" || id.charAt(17)=="X")
      {
          if ("x"!=Get_VerifyBit(id) && "X"!=Get_VerifyBit(id)){
              alert("���֤У������������һλ��");
              return false;
          }

      }else{
          if (id.charAt(17)!=Get_VerifyBit(id)){
              alert("���֤У������������һλ��");
              return false;
          }
      }

      birthday=id.substring(6,10) + "-" + id.substring(10,12) + "-" + id.substring(12,14);
      if ("13579".indexOf(id.substring(16,17)) > -1){
          sex="1";
      }else{
          sex="2";
      }
  }

  return true;
}



function CheckIdentityCard15(idCard,comments){
  var id=idCard;
  var id_length=id.length;

  if (id_length==0){
      alert("���������֤����!");
      return false;
  }

  if (id_length!=15){
      alert("���֤���볤��ӦΪ15λ��");
      return false;
  }

  if (id_length==15){
      yyyy="19"+id.substring(6,8);
      mm=id.substring(8,10);
      dd=id.substring(10,12);

      if (mm>12 || mm<=0){
          alert("�������֤��,�·ݷǷ���");
          return false;
      }

      if (dd>31 || dd<=0){
          alert("�������֤��,���ڷǷ���");
          return false;
      }

      birthday=yyyy+ "-" +mm+ "-" +dd;

      if ("13579".indexOf(id.substring(14,15))!=-1){
          sex="1";
      }else{
          sex="2";
      }
  }
		return true;
}
 
function CheckIdentityCard18(idCard,comments){
		var id=idCard;
  var id_length=id.length;

  if (id_length==0){
      alert("���������֤����!");
      return false;
  }

  if (id_length!=18){
      alert("���֤���볤��ӦΪ18λ��");
      return false;
  } 
  
  if (id_length==18){
      if (id.indexOf("X") > 0 && id.indexOf("X")!=17 || id.indexOf("x")>0 && id.indexOf("x")!=17){
          alert("���֤������\"X\"����λ�ò���ȷ��");
          return false;
      }

      yyyy=id.substring(6,10);
      if (yyyy>2200 || yyyy<1900){
          alert("�������֤����,��ȷǷ���");
          return false;
      }

      mm=id.substring(10,12);
      if (mm>12 || mm<=0){
          alert("�������֤����,�·ݷǷ���");
          return false;
      }

      dd=id.substring(12,14);
      if (dd>31 || dd<=0){
          alert("�������֤����,���ڷǷ���");
          return false;
      }

      if (id.charAt(17)=="x" || id.charAt(17)=="X")
      {
          if ("x"!=Get_VerifyBit(id) && "X"!=Get_VerifyBit(id)){
              alert("���֤У������������һλ��");
              return false;
          }

      }else{
          if (id.charAt(17)!=Get_VerifyBit(id)){
              alert("���֤У������������һλ��");
              return false;
          }
      }

      birthday=id.substring(6,10) + "-" + id.substring(10,12) + "-" + id.substring(12,14);
      if ("13579".indexOf(id.substring(16,17)) > -1){
          sex="1";
      }else{
          sex="2";
      }
  }

  return true;
}



//15λת18λ��,����У��λ�����һλ
function Get_VerifyBit(id){
  var result;
  var nNum=eval(id.charAt(0)*7+id.charAt(1)*9+id.charAt(2)*10+id.charAt(3)*5+id.charAt(4)*8+id.charAt(5)*4+id.charAt(6)*2+id.charAt(7)*1+id.charAt(8)*6+id.charAt(9)*3+id.charAt(10)*7+id.charAt(11)*9+id.charAt(12)*10+id.charAt(13)*5+id.charAt(14)*8+id.charAt(15)*4+id.charAt(16)*2);
  nNum=nNum%11;
  switch (nNum) {
     case 0 :
        result="1";
        break;
     case 1 :
        result="0";
        break;
     case 2 :
        result="X";
        break;
     case 3 :
        result="9";
        break;
     case 4 :
        result="8";
        break;
     case 5 :
        result="7";
        break;
     case 6 :
        result="6";
        break;
     case 7 :
        result="5";
        break;
     case 8 :
        result="4";
        break;
     case 9 :
        result="3";
        break;
     case 10 :
        result="2";
        break;
  }
  //document.write(result);
  return result;
}


