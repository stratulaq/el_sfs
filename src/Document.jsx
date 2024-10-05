import { useState } from 'react';
import Images from './assets/Images';
import { LOCATIONS_TYPE_1, LOCATIONS_TYPE_2, LOCATIONS_TYPE_3, LOCATIONS_TYPE_4 } from './locations';
import Type from './Type';
import moment from "moment/moment";

function Document(props) {
    const {date, total, daycost } = props;
    const places1 = LOCATIONS_TYPE_1();
    const places2 = LOCATIONS_TYPE_2();
    const places3 = LOCATIONS_TYPE_3();
    const places4 = LOCATIONS_TYPE_4();

  return (
    <div className="flex flex-col">
        <div className='flex flex-col items-end italic mb-[16px]'>
            <span>Anexa nr.2</span>
            <span>nr.622 din 13 noiembrie 2018</span>
        </div>
        <div className='flex flex-col items-end  mb-[16px]'>
            <span><b className='font-[500]'>Serviciul Fiscal de Stat</b> / Государственная Налоговая Cлужба</span>
            <span>____________________________________</span>
            <span className='text-[10px]'>(denumirea subdiviziunii/ наименование подразделения)</span>
        </div>
        <div className='flex flex-col items-center mb-[16px] px-[64px]'>
            <span className='text-[13px]'><b>DECLARAȚIA-CERERE</b> / ДЕКЛАРАЦИЯ-ЗАЯВЛЕНИЕ</span>
            <span className='font-[500] text-center leading-1'>
                privind înregistrarea contractului de transmitere în posesie şi/sau în folosinţă (locaţiune, arendă, uzufruct, superficie) a proprietății imobiliare
                </span>
            <span className='text-center text-[11px] leading-1'>
                о регистрации договора передачи во владение и/или пользование (в имущественный наем, аренду, узуфрукт, суперфиций) недвижимой собственности
                </span>
        </div>
        <div className='flex flex-col mb-[8px] leading-1 items-start'>
            <span className=''>Contribuabilul</span>
            <span className='text-[10px]'>Налогоплательщик</span>
            <span className=''>________________________________________________________________________</span>
            <span className='text-[10px]'>(numele, prenumele persoanei fizice/ фамилия, имя физического лица)</span>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>domiciliat/ă în localitatea <b>Chisinau</b></span>
                <span className='text-[10px]'>проживающий/ая в населенный пункте</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>raionul _________</span>
                <span className='text-[10px]'>район</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>str. <b>Decebal</b></span>
                <span className='text-[10px]'>ул.</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>nr. <b>6/1</b></span>
                <span className='text-[10px]'>№</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>ap. <b>31</b></span>
                <span className='text-[10px]'>кв.</span>
            </div>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>codul fiscal (IDNP) /__/__/__/__/__/__/__/__/__/__/__/__/__/, </span>
                <span className='text-[10px]'>фискальный код (IDNP)</span>
            </div>
        </div>
        <div className='flex mb-[16px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>tel. de contact /__/__/__/__/__/__/__/__/__/,</span>
                <span className='text-[10px]'>контактный телефон</span>
            </div>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>e-mail ___________________, </span>
            </div>
        </div>
        <div className='flex flex-col mb-[8px] leading-1 items-start'>
            <span className=''>Reprezentantul</span>
            <span className='text-[10px]'>Представитель</span>
            <span className=''>________________________________________________________________________</span>
            <span className='text-[10px]'>(numele, prenumele persoanei fizice/ фамилия, имя физического лица)</span>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>domiciliat/ă în localitatea ____________</span>
                <span className='text-[10px]'>проживающий/ая в населенный пункте</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>raionul ____________</span>
                <span className='text-[10px]'>район</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>str. ____________</span>
                <span className='text-[10px]'>ул.</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>nr. ________</span>
                <span className='text-[10px]'>№</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>ap. ________</span>
                <span className='text-[10px]'>кв.</span>
            </div>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>codul fiscal (IDNP) /__/__/__/__/__/__/__/__/__/__/__/__/__/, </span>
                <span className='text-[10px]'>фискальный код (IDNP)</span>
            </div>
        </div>
        <div className='flex mb-[16px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>tel. de contact /__/__/__/__/__/__/__/__/__/,</span>
                <span className='text-[10px]'>контактный телефон</span>
            </div>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>e-mail ___________________, </span>
            </div>
        </div>
        <div className='flex flex-col mb-[8px] leading-1 items-start'>
            <span className='leading-1'>solicit înregistrarea contractului de transmitere în posesie şi/sau în folosinţă (locaţiune, arendă, uzufruct, superficie) a proprietății imobiliare la subdiviziunea Serviciului Fiscal de Stat după cum urmează:</span>
            <span className='text-[10px] leading-1'>прошу зарегистрировать договор передачи во владение и/или пользование (в имущественный наем, аренду, узуфрукт,                                     суперфиций) недвижимой собственности в подразделение Государственной Налоговой Службы следующим образом:</span>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>data contractului ____________ , </span>
                <span className='text-[10px]'>дата договора</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>codul cadastral ____________</span>
                <span className='text-[10px]'>кадастровый код</span>
            </div>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>raionul ____________ , </span>
                <span className='text-[10px]'>район</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>localitatea unde este amplasat bunul imobil ____________</span>
                <span className='text-[10px]'>населенный пункт, где расположен объект недвижимого имущества</span>
            </div>
        </div>
        <div className='flex mb-[16px] items-start gap-3'>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>str. ____________</span>
                <span className='text-[10px]'>ул.</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>nr. ________</span>
                <span className='text-[10px]'>№</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>ap. ________</span>
                <span className='text-[10px]'>кв.</span>
            </div>
        </div>
        <div className='flex flex-col mb-[8px] leading-1 items-start'>
            <span className=''>categoria bunului imobil:</span>
            <span className='text-[10px]'>категория объекта недвижимого имущества</span>
        </div>
        <div className='flex mb-[4px] items-start gap-4'>
            {places1.map((item) => (
                <Type item={item}/>
            ))}
        </div>
        <div className='flex mb-[4px] items-start gap-4'>
            {places2.map((item) => (
                <Type item={item}/>
            ))}
        </div>
        <div className='flex mb-[4px] items-start gap-4'>
            {places3.map((item) => (
                <Type item={item}/>
            ))}
        </div>
        <div className='flex mb-[16px] items-start gap-4'>
            {places4.map((item) => (
                <Type item={item}/>
            ))}
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>Numele, prenumele locatarului/arendașului /__/__/__/__/__/__/__/__/__/__/__/__/__/, </span>
                <span className='text-[10px]'>фамилия, имя нанимателя/арендатора</span>
            </div>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>codul fiscal al locatarului/arendașului (IDNP) /__/__/__/__/__/__/__/__/__/__/__/__/__/, </span>
                <span className='text-[10px]'>фискальный код нанимателя/арендатора (IDNP)</span>
            </div>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>valoarea contractului pentru perioada de referință (<b className='underline'>ZI</b>/lună/an) <b>{daycost}</b>, </span>
                <span className='text-[10px]'>стоимость договора за отчетный период (<b className='underline'>день</b> / месяц / год)</span>
            </div>
            <div className='flex flex-col  leading-1 items-start'>
                <span className=''>valuta <b>MDL</b></span>
                <span className='text-[10px]'>валюта</span>
            </div>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>valoarea contractuală în MDL conform cursului  BNM la data înregistrării <b>{total}</b>, </span>
                <span className='text-[10px]'>договорная стоймость в MDL по курсу НБМ на дату регистрации</span>
            </div>
        </div>
        <div className='flex mb-[8px] items-start gap-3'>
            <div className='flex flex-col leading-1 items-start'>
                <span className=''>valabilitatea contractului <b>{moment(date).format("DD/MM/YYYY")}</b>. </span>
                <span className='text-[10px]'>срок действия договора</span>
            </div>
        </div>
        <div className='flex mb-[8px] items-start'>
            <div className='flex gap-3'>                
                <div className='flex items-center gap-1'>
                    <img src={Images.checked} alt='Logo' className='h-[10px] mt-3'/> 
                </div>
                <div className='flex flex-col leading-1 items-start italic'>
                    <span className=''>„nu este întocmit contract în scris de transmitere în posesie şi/sau în folosinţă (locaţiune, arendă, uzufruct, superficie)”</span>
                    <span className='text-[10px]'>„не составлен договор в письменном виде передачи во владение и/или пользование (в имущественный наем, аренду, узуфрукт, суперфиций)” </span>
                </div>
            </div>
        </div>
        <div className='flex flex-col mb-[16px] items-start'>
                <span className='font-[600] m-0'>Declaraţia este întocmită pe propria răspundere a contribuabilului (locator/arendator). <br/> Declar că informațiile prezentate sunt veridice</span>
                <span className='text-[10px] font-[600] m-0'>Декларация представлена  под собственную ответственность налогоплательщика (нанимателя/арендатора).<br/> Я заявляю, что представленные сведения являются достоверными.</span>
        </div>
        <div className='flex mb-[16px] items-start gap-3'>
            <div className='flex flex-1 flex-col leading-1 items-start'>
                <span className='text-[14px] font-[600] underline italic'> Girbu Ellina </span>
                <span className='italic'>numele, prenumele/ <small>фамилия, имя</small> </span>
            </div>
            <div className='flex flex-col leading-1 items-start flex-1 '>
                <span className=''><b>{moment().format("DD/MM/YYYY")}</b></span>
                <span className='italic'>data / <small>дата</small> </span>
            </div>
        </div>
        <div className='flex mb-[32px] items-start gap-3'>
            <div className='flex flex-1 flex-col leading-1 items-start'>
                <span className=''>_________________________________</span>
                <span className='italic'> semnătura / <small>подпись</small> </span>
            </div>
        </div>
        <div className='flex flex-col mb-[32px] items-start'>
            <p className='mb-[12px]'>Dacă contractul de transmitere în posesie şi/sau în folosinţă (locaţiune, arendă, uzufruct, superficie) a proprietății imobiliare a fost reziliat, contribuabilul (locatorul/arendator) 
                este obligat în termen de <b>3 zile</b> să depună <b>Declarația privind rezilierea contractului de transmitere în posesie şi/sau în folosinţă (locaţiune, arendă, uzufruct, superficie) a proprietății imobiliare, la DDF.</b></p>
            <p className='text-[10px]'>Если договор о передаче во владение и/или пользование (в имущественный наем, аренду, узуфрукт, суперфиций) недвижимой собственности был расторгнут, налогоплательщик (наниматель/арендатор) обязан в 3-дневный срок подать Заявление о расторжении договора передачи во владение и/или пользование (в имущественный наем, аренду, узуфрукт, суперфиций) недвижимой собственности, в УНО.</p>
        
                <span className='font-[500]'></span>
        </div>
        <div className='flex items-start gap-3'>
            <div className='flex flex-1 flex-col leading-1 items-start'>
                <span className=''>_________________________________</span>
                <span className='italic'>numele, prenumele inspectorului fiscal responsabil <br/>
                    <small>фамилия, имя ответственного налогового инспектора</small>
                </span>
            </div>
            <div className='flex flex-col leading-1 items-start flex-1 '>
                <span className=''>______________________</span>
                <span className='italic'>semnătura / <small>подпись</small>
                    </span>
            </div>
        </div>
    </div>
  );
}

export default Document;
