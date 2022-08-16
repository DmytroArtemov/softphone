import "./Dialpad.scss";

const Dialpad = ({active, setActive}) => {

    function dialNumber(event) {
        const targ = event.target;
        const input = document.getElementById('phoneNumber');
        input.value += targ.dataset.num;
    }
    
    function validation() {
        const input = document.getElementById('phoneNumber');
        const regex = /[A-Za-zА-Яа-яЁё!@$%^&_~()|?."'<>:{}[\],-/\\]/;
        input.value = input.value.replace(regex, '');
    }
    
    function dialClear() {
        const input = document.getElementById('phoneNumber');
        input.value = input.value.slice(0, -1);
    }
    
    return(
        <div className={active ? "box-dialpad active": "box-dialpad"}>
            <div className={active ? "overlay active": "overlay"} onClick={() => setActive(false)}></div>
            <div className={active ? "dialpad active": "dialpad"}>
                <button type="button" className="btn-close btnClose" onClick={() => setActive(false)}>
                    <span></span>
                    <span></span>
                </button>
                <div className="field-number">
                    <input type="tel" id="phoneNumber" maxLength="15" placeholder="Phone Number" onChange={validation}/>
                    <button type="button" className="delete" onClick={dialClear}>
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4995 0.5H8.0179C7.68955 0.499935 7.36441 0.564585 7.06106 0.690254C6.75771 0.815924 6.4821 1.00015 6.24999 1.2324L0.366199 7.1158C-0.122066 7.60407 -0.122066 8.39545 0.366199 8.88332L6.24999 14.7671C6.71873 15.2358 7.35464 15.4995 8.01751 15.4995H22.4995C23.8803 15.4995 24.9994 14.3804 24.9994 12.9996V2.99992C24.9994 1.6191 23.8803 0.5 22.4995 0.5ZM19.1914 10.4239C19.4355 10.668 19.4355 11.0637 19.1914 11.3079L18.3078 12.1914C18.0637 12.4355 17.668 12.4355 17.4238 12.1914L14.9997 9.76728L12.5756 12.1914C12.3314 12.4355 11.9357 12.4355 11.6916 12.1914L10.808 11.3079C10.5639 11.0637 10.5639 10.668 10.808 10.4239L13.2322 7.99976L10.808 5.57562C10.5639 5.33148 10.5639 4.93579 10.808 4.69166L11.6916 3.8081C11.9357 3.56396 12.3314 3.56396 12.5756 3.8081L14.9997 6.23224L17.4238 3.8081C17.668 3.56396 18.0637 3.56396 18.3078 3.8081L19.1914 4.69166C19.4355 4.93579 19.4355 5.33148 19.1914 5.57562L16.7672 7.99976L19.1914 10.4239Z" fill="rgba(54, 74, 115, 1)"/></svg>
                    </button>
                </div>
                <div className="numpad">
                    <span className="btnNumber" data-num="1" onClick={dialNumber}>1</span>
                    <span className="btnNumber" data-num="2" onClick={dialNumber}>2</span>
                    <span className="btnNumber" data-num="3" onClick={dialNumber}>3</span>
                    <span className="btnNumber" data-num="4" onClick={dialNumber}>4</span>
                    <span className="btnNumber" data-num="5" onClick={dialNumber}>5</span>
                    <span className="btnNumber" data-num="6" onClick={dialNumber}>6</span>
                    <span className="btnNumber" data-num="7" onClick={dialNumber}>7</span>
                    <span className="btnNumber" data-num="8" onClick={dialNumber}>8</span>
                    <span className="btnNumber" data-num="9" onClick={dialNumber}>9</span>
                    <span className="btnNumber" data-num="0" onClick={dialNumber}>0</span>
                    <div>
                        <span className="btnNumber" data-num="*" onClick={dialNumber}>*</span>
                        <span className="btnNumber" data-num="+" onClick={dialNumber}>+</span>
                        <span className="btnNumber" data-num="#" onClick={dialNumber}>#</span>
                    </div>
                </div>
                <button className="get-call">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4909 0.671976L10.6472 0.0157254C10.3382 -0.0553684 10.021 0.10596 9.89524 0.395804L8.58274 3.4583C8.4679 3.72627 8.54446 4.04073 8.77141 4.22393L10.4284 5.58018C9.44407 7.67745 7.72415 9.42198 5.58313 10.4255L4.22688 8.76846C4.04094 8.54151 3.72923 8.46494 3.46126 8.57979L0.398756 9.89229C0.106178 10.0208 -0.0551504 10.338 0.0159434 10.647L0.672193 13.4907C0.740553 13.786 1.00305 13.9993 1.31204 13.9993C8.31477 13.9993 13.9995 8.32549 13.9995 1.31182C13.9995 1.00557 13.789 0.740335 13.4909 0.671976Z" fill="currentColor"/></svg>
                </button>
            </div>
        </div>
    )
}

export default Dialpad;