import { useState, useEffect } from "react";
import icon from "./assets/icon.png";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [options, setOptions] = useState([]);
  const [flag, setFlag] = useState("USD");
  const [toFlag, setToFlag] = useState("INR");
  const [inputVal, setInputVal] = useState(1);
  const [convterted, setConvterted] = useState("");

  const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setFlag(val);
  };

  const handleToChange = (e) => {
    const val = e.target.value;
    setToFlag(val);
  };

  const handleInput = (e) => {
    const input = e.target.value;
    setInputVal(input);
  };

  async function conveter() {
    const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${flag}&to=${toFlag}&amount=${inputVal}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "496d76f1bcmsh3a528487fa981bcp115454jsncfd9b30ac39f",
        "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const conversion = data.result;
      setConvterted(conversion);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = () => {
    conveter();
  };

  const changeCurrency = () => {
    setFlag(toFlag);
    setToFlag(flag);
  };

  useEffect(() => {
    setOptions(Object.keys(countryList));
    conveter();
  }, []);

  return (
    <>
      <div className="bg-slate-200 w-80 mx-auto mt-28 p-6 rounded-lg">
        <h1 className="font-bold text-xl">Currency Converter</h1>

        <div className="mt-4 ">
          <h4>Enter Amount</h4>
          <input
            onChange={handleInput}
            value={inputVal}
            type="number"
            className="rounded-md w-full h-8 p-2"
          />
        </div>

        <div className="flex justify-between mt-8 items-center">
          <div>
            <h4>From</h4>
            <div className="flex bg-white rounded-lg overflow-hidden p-1">
              <img
                src={`https://flagsapi.com/${countryList[flag]}/flat/64.png`}
                alt=""
                width={30}
              />
              <select value={flag} onChange={handleChange}>
                {options.map((currency) => {
                  return (
                    <option key={uuidv4()} value={currency}>
                      {currency}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div onClick={changeCurrency}>
            <img
              src={icon}
              width={20}
              alt="convert"
              className="hover:scale-110 cursor-pointer duration-300 ease-linear rounded-lg hover:bg-slate-400"
            />
          </div>

          <div>
            <h4>TO</h4>
            <div className="flex bg-white rounded-lg overflow-hidden p-1">
              <img
                src={`https://flagsapi.com/${countryList[toFlag]}/flat/64.png`}
                alt=""
                width={30}
              />
              <select value={toFlag} onChange={handleToChange}>
                {options.map((currency) => {
                  return (
                    <option key={uuidv4()} value={currency}>
                      {currency}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <h2 className="mt-8 text-green-600 font-semibold">
          {inputVal} {flag} = {convterted} {toFlag}
        </h2>

        <button
          onClick={handleClick}
          className="my-4 bg-purple-900 text-white p-2 w-full rounded-md hover:bg-purple-950 duration-300 ease-linear"
        >
          Get Exchange Rate
        </button>

        <p>
          <span className="font-bold">Note:</span> After entering amount please
          click button for conversion
        </p>
      </div>
    </>
  );
}

export default App;
