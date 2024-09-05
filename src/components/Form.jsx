import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown copy";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import DropdownWithLabel from "./DropdownwithInput";
import TextArea from "./TextArea";
import TextInputWithCheckbox from "./TextInputWithCheckbox";

const Form = () => {
  const [formData, setFormData] = useState({
    price1: "",
    price2: "",
    price3: "",
  });
  const fee = 80000;
  const periodeOptions = [
    { value: "01 SEPT - 30 OKT 2024" },
    { value: "01 NOV - 10 DES 2024" },
    { value: "11 DES 2024 - 11 JAN 2025" },
    { value: "11 JAN - 28 FEB 2025" },
    { value: "01 MAR - 21 MAR 2025" },
    { value: "22 MAR - 31 MAR 2025" },
    { value: "01 APR - 30 APR 2025" },
  ];

  const [selectedOptionPeriode, setSelectedOptionPeriode] = useState("");
  const [dropdownOpenPeriode, setDropdownOpenPeriode] = useState(false);

  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectChangePeriode = (e) => {
    setSelectedOptionPeriode(e.target.value);
    setFormData({ ...formData, Periode: e.target.value });
    setDropdownOpenPeriode(false);
  };

  const departfromOptions = [
    { value: "MAKASSAR" },
    { value: "JAKARTA" },
    { value: "SURABAYA" },
    { value: "BANJARMASIN" },
    { value: "MEDAN" },
    { value: "KENDARI" },
    { value: "KOTA PALU" },
    { value: "SINGAPURA" },
    { value: "KUALA LUMPUR" },
  ];
  const [selectedOptiondepartfrom, setSelectedOptiondepartfrom] = useState("");
  const [dropdownOpendepartfrom, setDropdownOpendepartfrom] = useState(false);

  const handleSelectChangedepartfrom = (e) => {
    setSelectedOptiondepartfrom(e.target.value);
    setFormData({ ...formData, departfrom: e.target.value });
    setDropdownOpendepartfrom(false);
  };

  const departtoOptions = [{ value: "Jeddah" }, { value: "Madinah" }];
  const [selectedOptiondepartto, setSelectedOptiondepartto] = useState("");
  const [dropdownOpendepartto, setDropdownOpendepartto] = useState(false);

  const handleSelectChangedepartto = (e) => {
    setSelectedOptiondepartto(e.target.value);
    setFormData({ ...formData, departto: e.target.value });
    setDropdownOpendepartto(false);
  };

  const PaketHariOptions = [
    { value: "9 Hari" },
    { value: "12 Hari" },
    { value: "13 Hari" },
    { value: "15 Hari" },
    { value: "16 Hari" },
    { value: "30 Hari" },
  ];
  const [selectedOptionPaketHari, setSelectedOptionPaketHari] = useState("");
  const [dropdownOpenPaketHari, setDropdownOpenPaketHari] = useState(false);

  const handleSelectChangePaketHari = (e) => {
    setSelectedOptionPaketHari(e.target.value);
    setFormData({ ...formData, PaketHari: e.target.value });
    setDropdownOpenPaketHari(false);
  };

  const backfromOptions = [{ value: "Jeddah" }, { value: "Madinah" }];
  const [selectedOptionbackfrom, setSelectedOptionbackfrom] = useState("");
  const [dropdownOpenbackfrom, setDropdownOpenbackfrom] = useState(false);

  const handleSelectChangebackfrom = (e) => {
    setSelectedOptionbackfrom(e.target.value);
    setFormData({ ...formData, backfrom: e.target.value });
    setDropdownOpenbackfrom(false);
  };

  const backtoOptions = [
    { value: "MAKASSAR" },
    { value: "JAKARTA" },
    { value: "SURABAYA" },
    { value: "BANJARMASIN" },
    { value: "MEDAN" },
    { value: "KENDARI" },
    { value: "KOTA PALU" },
    { value: "SINGAPURA" },
    { value: "KUALA LUMPUR" },
  ];
  const [selectedOptionbackto, setSelectedOptionbackto] = useState("");
  const [dropdownOpenbackto, setDropdownOpenbackto] = useState(false);

  const handleSelectChangebackto = (e) => {
    setSelectedOptionbackto(e.target.value);
    setFormData({ ...formData, backto: e.target.value });
    setDropdownOpenbackto(false);
  };

  const MaskapaiOptions = [
    { value: "GARUDA INDONESIA UPG-CKG-JED - Rp 17.900.000" },
    { value: "LION UPG-JED - Rp 16.200.000" },
    { value: "AIR ASIA UPG-KUL-JED - Rp 15.500.000" },
    { value: "LION AIR UPG-JED - Rp 16.200.000" },
  ];
  const [selectedOptionMaskapai, setSelectedOptionMaskapai] = useState("");
  const [dropdownOpenMaskapai, setDropdownOpenMaskapai] = useState(false);

  const handleSelectChangeMaskapai = (e) => {
    setSelectedOptionMaskapai(e.target.value);
    setFormData({ ...formData, Maskapai: e.target.value });
    setDropdownOpenMaskapai(false);
  };

  const JmlhPstOptions = Array.from({ length: 45 }, (_, index) => ({
    value: index + 1,
  }));

  const [selectedOptionJmlhPst, setSelectedOptionJmlhPst] = useState("");
  const [dropdownOpenJmlhPst, setDropdownOpenJmlhPst] = useState(false);

  const handleSelectChangeJmlhPst = (e) => {
    setSelectedOptionJmlhPst(e.target.value);
    setFormData({ ...formData, JmlhPst: e.target.value });
    setDropdownOpenJmlhPst(false);
  };
  const VendorOptions = [
    { value: "ROWA" },
    { value: "HEAVEN" },
    { value: "AREEJ TABAH" },
    { value: "DIYAR ALDIWANIA" },
    { value: "AMNA GRUP" },
    { value: "LOCATEL" },
    { value: "ALBASITIAH" },
    { value: "MAYSAN GRUP" },
  ];

  const [selectedOptionVendor, setSelectedOptionVendor] = useState("");
  const [dropdownOpenVendor, setDropdownOpenVendor] = useState(false);

  const handleSelectChangeVendor = (e) => {
    setSelectedOptionVendor(e.target.value);
    setFormData({ ...formData, Vendor: e.target.value });
    setDropdownOpenVendor(false);
  };

  const HtlBntgOptions = [{ value: 3 }, { value: 4 }, { value: 5 }];

  const [selectedOptionHtlBntg, setSelectedOptionHtlBntg] = useState("");
  const [dropdownOpenHtlBntg, setDropdownOpenHtlBntg] = useState(false);

  const handleSelectChangeHtlBntg = (e) => {
    setSelectedOptionHtlBntg(e.target.value);
    setFormData({ ...formData, HtlBntg: e.target.value });
    setDropdownOpenHtlBntg(false);
  };

  const HtlOptions = [
    { value: "RAMA AL MADINA (Quad) - Rp. 537,500" },
    { value: "BIR AL EIMAN (Quad) Rp. 515,000" },
    { value: "AL ANDALUS PALACE GOLDEN MADINAH (Quad) - Rp 582.500" },
    { value: "QASR AL ANDALUS 3 MADINAH (Quad) - Rp. 582,500" },
    { value: "ARTAL AL-MONAWWARAH HOTEL (Quad) - Rp 610,625" },
    { value: "ARTAL INTERNATIONAL MADINAH (Quad) Rp. 672,500" },
    { value: "SIDRA AL MADINAH (Quad) - Rp. 537,500" },
  ];

  const [selectedOptionHtl, setSelectedOptionHtl] = useState("");
  const [dropdownOpenHtl, setDropdownOpenHtl] = useState(false);

  const handleSelectChangeHtl = (e) => {
    setSelectedOptionHtl(e.target.value);
    setFormData({ ...formData, Htl: e.target.value });
    setDropdownOpenHtl(false);
  };

  const JmlhHari1Options = Array.from({ length: 15 }, (_, index) => {
    const price1 = 537500 * (index + 1);
    const formattedPrice = price1;
    if (index === 0) {
      return { value: "City Tour-1 Hari", price1: formattedPrice };
    }
    const malam = index;
    const hari = index + 1;
    return {
      value: `${malam} Malam-${hari} Hari`,
      price1: formattedPrice,
    };
  });

  const [selectedOptionJmlhHari1, setSelectedOptionJmlhHari1] = useState("");
  const [dropdownOpenJmlhHari1, setDropdownOpenJmlhHari1] = useState(false);

  const handleSelectChangeJmlhHari1 = (e) => {
    const selectedOption = JSON.parse(e.target.value);
    setSelectedOptionJmlhHari1(e.target.value);
    setFormData({
      ...formData,
      JmlhHari1: selectedOption.value,
      price1: selectedOption.price1,
    });
    setDropdownOpenJmlhHari1(false);
  };

  const [selectedOptionVendor2, setSelectedOptionVendor2] = useState("");
  const [dropdownOpenVendor2, setDropdownOpenVendor2] = useState(false);

  const handleSelectChangeVendor2 = (e) => {
    setSelectedOptionVendor2(e.target.value);
    setFormData({ ...formData, Vendor2: e.target.value });
    setDropdownOpenVendor2(false);
  };

  const [selectedOptionHtlBntg2, setSelectedOptionHtlBntg2] = useState("");
  const [dropdownOpenHtlBntg2, setDropdownOpenHtlBntg2] = useState(false);

  const handleSelectChangeHtlBntg2 = (e) => {
    setSelectedOptionHtlBntg2(e.target.value);
    setFormData({ ...formData, HtlBntg2: e.target.value });
    setDropdownOpenHtlBntg2(false);
  };

  const Htl1Options = [
    { value: "RAMA AL MADINA (Quad) - Rp. 537,500" },
    { value: "BIR AL EIMAN (Quad) Rp. 515,000" },
    { value: "AL ANDALUS PALACE GOLDEN MADINAH (Quad) - Rp 582.500" },
    { value: "QASR AL ANDALUS 3 MADINAH (Quad) - Rp. 582,500" },
    { value: "ARTAL AL-MONAWWARAH HOTEL (Quad) - Rp 610,625" },
    { value: "ARTAL INTERNATIONAL MADINAH (Quad) Rp. 672,500" },
    { value: "SIDRA AL MADINAH (Quad) - Rp. 537,500" },
  ];

  const [selectedOptionHtl1, setSelectedOptionHtl1] = useState("");
  const [dropdownOpenHtl1, setDropdownOpenHtl1] = useState(false);

  const handleSelectChangeHtl1 = (e) => {
    setSelectedOptionHtl1(e.target.value);
    setFormData({ ...formData, Htl1: e.target.value });
    setDropdownOpenHtl1(false);
  };

  const JmlhHari2Options = Array.from({ length: 15 }, (_, index) => {
    const price2 = 417900 * (index + 1);
    const formattedPrice = price2;
    if (index === 0) {
      return { value: "City Tour-1 Hari", price2: formattedPrice };
    }
    const malam = index;
    const hari = index + 1;
    return {
      value: `${malam} Malam-${hari} Hari`,
      price2: formattedPrice,
    };
  });

  const [selectedOptionJmlhHari2, setSelectedOptionJmlhHari2] = useState("");
  const [dropdownOpenJmlhHari2, setDropdownOpenJmlhHari2] = useState(false);

  const handleSelectChangeJmlhHari2 = (e) => {
    const selectedOption = JSON.parse(e.target.value);
    setSelectedOptionJmlhHari2(e.target.value);
    setFormData({
      ...formData,
      JmlhHari2: selectedOption.value,
      price2: selectedOption.price2,
    });
    setDropdownOpenJmlhHari2(false);
  };

  const HandlingSaudiaOptions = [
    { value: "HANDLING SAUDI FULL SERVICE" },
    { value: "AIRPORT HANDLING SAUDI" },
  ];

  const [selectedOptionHandlingSaudia, setSelectedOptionHandlingSaudia] =
    useState("");
  const [dropdownOpenHandlingSaudia, setDropdownOpenHandlingSaudia] =
    useState(false);

  const handleSelectChangeHandlingSaudia = (e) => {
    setSelectedOptionHandlingSaudia(e.target.value);
    setFormData({ ...formData, HandlingSaudia: e.target.value });
    setDropdownOpenHandlingSaudia(false);
  };

  const PerlengkapanOptions = [
    { value: "KOPER LENGKAP AKSESORIS" },
    { value: "AKSESORIS (BATIK, COVER BAG)" },
  ];

  const [selectedOptionPerlengkapan, setSelectedOptionPerlengkapan] =
    useState("");
  const [dropdownOpenPerlengkapan, setDropdownOpenPerlengkapan] =
    useState(false);

  const handleSelectChangePerlengkapan = (e) => {
    setSelectedOptionPerlengkapan(e.target.value);
    setFormData({ ...formData, Perlengkapan: e.target.value });
    setDropdownOpenPerlengkapan(false);
  };
  const AsuransiOptions = [{ value: "ASURANSI PERJALANAN UMROH" }];

  const [selectedOptionAsuransi, setSelectedOptionAsuransi] = useState("");
  const [dropdownOpenAsuransi, setDropdownOpenAsuransi] = useState(false);

  const handleSelectChangeAsuransi = (e) => {
    setSelectedOptionAsuransi(e.target.value);
    setFormData({ ...formData, Asurans: e.target.value });
    setDropdownOpenAsuransi(false);
  };
  const ManasikOptions = [
    { value: "MANASIK DI HOTEL" },
    { value: "MANASIK ONLINE" },
    { value: "Tanpa Jasa Manasik" },
  ];

  const [selectedOptionManasik, setSelectedOptionManasik] = useState("");
  const [dropdownOpenManasik, setDropdownOpenManasik] = useState(false);

  const handleSelectChangeManasik = (e) => {
    setSelectedOptionManasik(e.target.value);
    setFormData({ ...formData, Manasik: e.target.value });
    setDropdownOpenManasik(false);
  };

  const HandlingDosmetikOptions = [
    { value: "HANDLING PP BAGASI + SNACK" },
    { value: "HANDLING PP UPG + NASI DOS" },
    { value: "HANDLING PP UPG LOUNGE CONCORDIA" },
  ];

  const [selectedOptionHandlingDosmetik, setSelectedOptionHandlingDosmetik] =
    useState("");
  const [dropdownOpenHandlingDosmetik, setDropdownOpenHandlingDosmetik] =
    useState(false);

  const handleSelectChangeHandlingDosmetik = (e) => {
    setSelectedOptionHandlingDosmetik(e.target.value);
    setFormData({ ...formData, HandlingDosmetik: e.target.value });
    setDropdownOpenHandlingDosmetik(false);
  };
  const VisaOptions = [{ value: "VISA SAJA + TASREH RAODAH" }];

  const [selectedOptionVisa, setSelectedOptionVisa] = useState("");
  const [dropdownOpenVisa, setDropdownOpenVisa] = useState(false);

  const handleSelectChangeVisa = (e) => {
    setSelectedOptionVisa(e.target.value);
    setFormData({ ...formData, Visa: e.target.value });
    setDropdownOpenVisa(false);
  };
  const TransportasiOptions = [
    { value: "GRATIS BUS VIP" },
    { value: "GRATIS BUS VIP + THAIF" },
  ];

  const [selectedOptionTransportasi, setSelectedOptionTransportasi] =
    useState("");
  const [dropdownOpenTransportasi, setDropdownOpenTransportasi] =
    useState(false);

  const handleSelectChangeTransportasi = (e) => {
    setSelectedOptionTransportasi(e.target.value);
    setFormData({ ...formData, Transportasi: e.target.value });
    setDropdownOpenTransportasi(false);
  };

  const ZTOptions = [{ value: "CITY TOUR KE AL ULA MADINAH" }];

  const [selectedOptionZT, setSelectedOptionZT] = useState("");
  const [dropdownOpenZT, setDropdownOpenZT] = useState(false);

  const handleSelectChangeZT = (e) => {
    setSelectedOptionZT(e.target.value);
    setFormData({ ...formData, ZT: e.target.value });
    setDropdownOpenZT(false);
  };

  const KeretaCepatOptions = [{ value: "Kereta Cepat madinah - mekkah" }];

  const [selectedOptionKeretaCepat, setSelectedOptionKeretaCepat] =
    useState("");
  const [dropdownOpenKeretaCepat, setDropdownOpenKeretaCepat] = useState(false);

  const handleSelectChangeKeretaCepat = (e) => {
    setSelectedOptionKeretaCepat(e.target.value);
    setFormData({ ...formData, KeretaCepat: e.target.value });
    setDropdownOpenKeretaCepat(false);
  };

  const JasaMutawifOptions = [{ value: "JASA MUTAWIF" }];

  const [selectedOptionJasaMutawif, setSelectedOptionJasaMutawif] =
    useState("");
  const [dropdownOpenJasaMutawif, setDropdownOpenJasaMutawif] = useState(false);

  const handleSelectChangeJasaMutawif = (e) => {
    setSelectedOptionJasaMutawif(e.target.value);
    setFormData({ ...formData, JasaMutawif: e.target.value });
    setDropdownOpenJasaMutawif(false);
  };

  const JmlhHari3Options = Array.from({ length: 10 }, (_, index) => {
    const price3 = 32143 * (index + 1);
    const formattedPrice = price3;
    const hari = index + 1;
    return {
      value: `${hari} Hari`,
      price1: formattedPrice,
    };
  });

  const [selectedOptionJmlhHari3, setSelectedOptionJmlhHari3] = useState("");
  const [dropdownOpenJmlhHari3, setDropdownOpenJmlhHari3] = useState(false);

  const handleSelectChangeJmlhHari3 = (e) => {
    const selectedOption = JSON.parse(e.target.value);
    setSelectedOptionJmlhHari3(e.target.value);
    setFormData({
      ...formData,
      JmlhHari3: selectedOption.value,
      price3: selectedOption.price1,
    });
    setDropdownOpenJmlhHari3(false);
  };

  const [textAreaDeskripsi, setTextAreaDeskripsi] = useState("");
  const handleTextAreaChangeDeskripsi = (e) => {
    setTextAreaDeskripsi(e.target.value);
  };
  const [textAreaIntrenasi, setTextAreaIntrenasi] = useState("");

  const handleTextAreaChangeIntrenasi = (e) => {
    setTextAreaIntrenasi(e.target.value);
  };

  const [textValue, setTextValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
        if(!isChecked){
            const value=757943;
            setTextValue(value.toLocaleString('id-ID'));
            setFormData({
                ...formData,
                Tl:'1 Free Tour Leader',
                price4: value,
              });
        }else{
            setTextValue('');
        }
    };

  //console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate("/preview", { state: { ...formData, selectedOptionPeriode } });
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-3 border rounded form-content">
        <h2 className="text-center">Tambah Produk</h2>

         {step === 1 && (
                    <>
                        <Dropdown
                            id="periode"
                            name="periode"
                            value={selectedOptionPeriode}
                            options={periodeOptions}
                            onChange={handleSelectChangePeriode}
                            dropdownOpen={dropdownOpenPeriode}
                            setDropdownOpen={setDropdownOpenPeriode}
                            label="Periode Bulan"
                            placeholder="Select Periode Bulan"
                        />

                        <DateInput
                            id="tglbrgkt"
                            name="tglbrgkt"
                            value={formData.tglbrgkt}
                            onChange={handleInputChange}
                            label="Tanggal Berangkat"
                        />

                        <div className='row'>
                            <div className="col-6">
                                <Dropdown
                                    id="departfrom"
                                    name="departfrom"
                                    value={selectedOptiondepartfrom}
                                    options={departfromOptions}
                                    onChange={handleSelectChangedepartfrom}
                                    dropdownOpen={dropdownOpendepartfrom}
                                    setDropdownOpen={setDropdownOpendepartfrom}
                                    label="Berangkat Dari"
                                    placeholder="Select Berangkat Dari"
                                />
                            </div>
                            <div className="col-6">
                                <Dropdown
                                    id="departto"
                                    name="departto"
                                    value={selectedOptiondepartto}
                                    options={departtoOptions}
                                    onChange={handleSelectChangedepartto}
                                    dropdownOpen={dropdownOpendepartto}
                                    setDropdownOpen={setDropdownOpendepartto}
                                    label="Tujuan Ke"
                                    placeholder="Select Tujuan Ke"
                                />
                            </div>
                        </div>

                        <Dropdown
                            id="PaketHari"
                            name="PaketHari"
                            value={selectedOptionPaketHari}
                            options={PaketHariOptions}
                            onChange={handleSelectChangePaketHari}
                            dropdownOpen={dropdownOpenPaketHari}
                            setDropdownOpen={setDropdownOpenPaketHari}
                            label="Paket Hari"
                            placeholder="Select Paket Hari"
                        />
                        <DateInput
                            id="tglPlg"
                            name="tglPlg"
                            value={formData.tglPlg}
                            onChange={handleInputChange}
                            label="Tanggal Pulang"
                        />

                        <div className='row'>
                            <div className="col-6">
                                <Dropdown
                                    id="backfrom"
                                    name="backfrom"
                                    value={selectedOptionbackfrom}
                                    options={backfromOptions}
                                    onChange={handleSelectChangebackfrom}
                                    dropdownOpen={dropdownOpenbackfrom}
                                    setDropdownOpen={setDropdownOpenbackfrom}
                                    label="Pulang Dari"
                                    placeholder="Select Pulang Dari"
                                />
                            </div>
                            <div className="col-6">
                                <Dropdown
                                    id="backto"
                                    name="backto"
                                    value={selectedOptionbackto}
                                    options={backtoOptions}
                                    onChange={handleSelectChangebackto}
                                    dropdownOpen={dropdownOpenbackto}
                                    setDropdownOpen={setDropdownOpenbackto}
                                    label="Tujuan Ke"
                                    placeholder="Select Tujuan Ke"
                                />
                            </div>
                        </div>

                        <Dropdown
                            id="Maskapai"
                            name="Maskapai"
                            value={selectedOptionMaskapai}
                            options={MaskapaiOptions}
                            onChange={handleSelectChangeMaskapai}
                            dropdownOpen={dropdownOpenMaskapai}
                            setDropdownOpen={setDropdownOpenMaskapai}
                            label="Maskapai"
                            placeholder="Select Maskapai"
                        />

                        <Dropdown
                            id="JmlhPst"
                            name="JmlhPst"
                            value={selectedOptionJmlhPst}
                            options={JmlhPstOptions}
                            onChange={handleSelectChangeJmlhPst}
                            dropdownOpen={dropdownOpenJmlhPst}
                            setDropdownOpen={setDropdownOpenJmlhPst}
                            label="Jumlah Peserta"
                            placeholder="Select Jumlah Peserta"
                        />

                        <div className='note'>
                            35-45 Peserta free biaya bus
                        </div>
                    </>
                )} 

         {step === 2 && (
                    <>
                        <Dropdown
                            id="Vendor"
                            name="Vendor"
                            value={selectedOptionVendor}
                            options={VendorOptions}
                            onChange={handleSelectChangeVendor}
                            dropdownOpen={dropdownOpenVendor}
                            setDropdownOpen={setDropdownOpenVendor}
                            label="Vendor"
                            placeholder="Select Vendor"
                        />

                        <Dropdown
                            id="HtlBntg"
                            name="HtlBntg"
                            value={selectedOptionHtlBntg}
                            options={HtlBntgOptions}
                            onChange={handleSelectChangeHtlBntg}
                            dropdownOpen={dropdownOpenHtlBntg}
                            setDropdownOpen={setDropdownOpenHtlBntg}
                            label="Hotel Bintang"
                            placeholder="Select Hotel Bintang"
                        />

                        <Dropdown
                            id="Htl"
                            name="Htl"
                            value={selectedOptionHtl}
                            options={HtlOptions}
                            onChange={handleSelectChangeHtl}
                            dropdownOpen={dropdownOpenHtl}
                            setDropdownOpen={setDropdownOpenHtl}
                            label="Hotel Madinah"
                            placeholder="Select Hotel Madinah"
                        />

                        <DropdownWithLabel
                            id="JmlhHari1"
                            name="JmlhHari1"
                            value={selectedOptionJmlhHari1}
                            options={JmlhHari1Options}
                            onChange={handleSelectChangeJmlhHari1}
                            dropdownOpen={dropdownOpenJmlhHari1}
                            setDropdownOpen={setDropdownOpenJmlhHari1}
                            label="Jumlah Hari"
                            label2="Hotel + Makan"
                            textValue={formData.price1.toLocaleString('id-ID')}
                            isTextInputDisabled={true}
                        />

                        <div className='row'>
                            <div className="col-6 mb-3">
                                <DateInput
                                    id="checkin1"
                                    name="checkin1"
                                    value={formData.checkin1}
                                    onChange={handleInputChange}
                                    label="Tanggal Masuk"
                                />
                            </div>
                            <div className="col-6 mb-3">
                                <DateInput
                                    id="checkout1"
                                    name="checkout1"
                                    value={formData.checkout1}
                                    onChange={handleInputChange}
                                    label="Tanggal Keluar"
                                />
                            </div>
                        </div>

                        <Dropdown
                            id="Vendor2"
                            name="Vendor2"
                            value={selectedOptionVendor2}
                            options={VendorOptions}
                            onChange={handleSelectChangeVendor2}
                            dropdownOpen={dropdownOpenVendor2}
                            setDropdownOpen={setDropdownOpenVendor2}
                            label="Vendor"
                            placeholder="Select Vendor"
                        />

                        <Dropdown
                            id="HtlBntg2"
                            name="HtlBntg2"
                            value={selectedOptionHtlBntg2}
                            options={HtlBntgOptions}
                            onChange={handleSelectChangeHtlBntg2}
                            dropdownOpen={dropdownOpenHtlBntg2}
                            setDropdownOpen={setDropdownOpenHtlBntg2}
                            label="Hotel Bintang"
                            placeholder="Select Hotel Bintang"
                        />

                        <Dropdown
                            id="Htl1"
                            name="Htl1"
                            value={selectedOptionHtl1}
                            options={Htl1Options}
                            onChange={handleSelectChangeHtl1}
                            dropdownOpen={dropdownOpenHtl1}
                            setDropdownOpen={setDropdownOpenHtl1}
                            label="Hotel Madinah"
                            placeholder="Select Hotel Madinah"
                        />

                        <DropdownWithLabel
                            id="JmlhHari2"
                            name="JmlhHari2"
                            value={selectedOptionJmlhHari2}
                            options={JmlhHari2Options}
                            onChange={handleSelectChangeJmlhHari2}
                            dropdownOpen={dropdownOpenJmlhHari2}
                            setDropdownOpen={setDropdownOpenJmlhHari2}
                            label="Jumlah Hari"
                            label2="Hotel + Makan"
                            textValue={formData.price2.toLocaleString('id-ID')}
                            isTextInputDisabled={true}
                        />


                        <div className='row'>
                            <div className="col-6 mb-3">
                                <DateInput
                                    id="checkin2"
                                    name="checkin2"
                                    value={formData.checkin2}
                                    onChange={handleInputChange}
                                    label="Tanggal Masuk"
                                />
                            </div>
                            <div className="col-6 mb-3">
                                <DateInput
                                    id="checkout2"
                                    name="checkout2"
                                    value={formData.checkout2}
                                    onChange={handleInputChange}
                                    label="Tanggal Keluar"
                                />
                            </div>
                        </div>
                    </>
                )}  

         {step === 3 && (
                    <>
                        <Dropdown
                            id="HandlingSaudia"
                            name="HandlingSaudia"
                            value={selectedOptionHandlingSaudia}
                            options={HandlingSaudiaOptions}
                            onChange={handleSelectChangeHandlingSaudia}
                            dropdownOpen={dropdownOpenHandlingSaudia}
                            setDropdownOpen={setDropdownOpenHandlingSaudia}
                            label="Handling Saudia"
                            placeholder="Handling Saudia"
                        />

                        <Dropdown
                            id="Perlengkapan"
                            name="Perlengkapan"
                            value={selectedOptionPerlengkapan}
                            options={PerlengkapanOptions}
                            onChange={handleSelectChangePerlengkapan}
                            onClick={() => setDropdownOpenPerlengkapan(!dropdownOpenPerlengkapan)}
                            dropdownOpen={dropdownOpenPerlengkapan}
                            setDropdownOpen={setDropdownOpenPerlengkapan}
                            label="Perlengkapan"
                            placeholder="Perlengkapan"
                        />

                        <Dropdown
                            id="Asuransi"
                            name="Asuransi"
                            value={selectedOptionAsuransi}
                            options={AsuransiOptions}
                            onChange={handleSelectChangeAsuransi}
                            onClick={() => setDropdownOpenAsuransi(!dropdownOpenAsuransi)}
                            dropdownOpen={dropdownOpenAsuransi}
                            setDropdownOpen={setDropdownOpenAsuransi}
                            label="Asuransi"
                            placeholder="Asuransi"
                        />

                        <Dropdown2
                            id="Manasik"
                            name="Manasik"
                            value={selectedOptionManasik}
                            options={ManasikOptions}
                            onChange={handleSelectChangeManasik}
                            onClick={() => setDropdownOpenManasik(!dropdownOpenManasik)}
                            dropdownOpen={dropdownOpenManasik}
                            setDropdownOpen={setDropdownOpenManasik}
                            label="Jasa Manasik"
                            placeholder="Tanpa Jasa Manasik"
                        />

                        <Dropdown2
                            id="HandlingDosmetik"
                            name="HandlingDosmetik"
                            value={selectedOptionHandlingDosmetik}
                            options={HandlingDosmetikOptions}
                            onChange={handleSelectChangeHandlingDosmetik}
                            onClick={() => setDropdownOpenHandlingDosmetik(!dropdownOpenHandlingDosmetik)}
                            dropdownOpen={dropdownOpenHandlingDosmetik}
                            setDropdownOpen={setDropdownOpenHandlingDosmetik}
                            label="Handling Dosmetik"
                            placeholder="Tanpa Handling Dosmetik"
                        />

                        <Dropdown2
                            id="Visa"
                            name="Visa"
                            value={selectedOptionVisa}
                            options={VisaOptions}
                            onChange={handleSelectChangeVisa}
                            onClick={() => setDropdownOpenVisa(!dropdownOpenVisa)}
                            dropdownOpen={dropdownOpenVisa}
                            setDropdownOpen={setDropdownOpenVisa}
                            label="Visa"
                            placeholder="Tanpa Visa"
                        />

                        <Dropdown2
                            id="Transportasi"
                            name="Transportasi"
                            value={selectedOptionTransportasi}
                            options={TransportasiOptions}
                            onChange={handleSelectChangeTransportasi}
                            onClick={() => setDropdownOpenTransportasi(!dropdownOpenTransportasi)}
                            dropdownOpen={dropdownOpenTransportasi}
                            setDropdownOpen={setDropdownOpenTransportasi}
                            label="Transportasi"
                            placeholder="Tanpa Transportasi"
                        />
                    </>
                )}

        {step === 4 && (
          <>
            <Dropdown2
              id="ZT"
              name="Ziarah Tambahan"
              value={selectedOptionZT}
              options={ZTOptions}
              onChange={handleSelectChangeZT}
              onClick={() => setDropdownOpenZT(!dropdownOpenZT)}
              dropdownOpen={dropdownOpenZT}
              setDropdownOpen={setDropdownOpenZT}
              label="Ziarah Tambahan"
              placeholder="Tanpa Ziarah Tambahan"
            />
            <Dropdown2
              id="KeretaCepat"
              name="KeretaCepat"
              value={selectedOptionKeretaCepat}
              options={KeretaCepatOptions}
              onChange={handleSelectChangeKeretaCepat}
              onClick={() =>
                setDropdownOpenKeretaCepat(!dropdownOpenKeretaCepat)
              }
              dropdownOpen={dropdownOpenKeretaCepat}
              setDropdownOpen={setDropdownOpenKeretaCepat}
              label="Kereta Cepat"
              placeholder="Tanpa Kereta Cepat"
            />
            <Dropdown2
              id="JasaMutawif"
              name="JasaMutawif"
              value={selectedOptionJasaMutawif}
              options={JasaMutawifOptions}
              onChange={handleSelectChangeJasaMutawif}
              onClick={() =>
                setDropdownOpenJasaMutawif(!dropdownOpenJasaMutawif)
              }
              dropdownOpen={dropdownOpenJasaMutawif}
              setDropdownOpen={setDropdownOpenJasaMutawif}
              label="Jasa Mutawif"
              placeholder="Tanpa Jasa Mutawif"
            />
            <DropdownWithLabel
              id="JmlhHari3"
              name="JmlhHari3"
              value={selectedOptionJmlhHari3}
              options={JmlhHari3Options}
              onChange={handleSelectChangeJmlhHari3}
              dropdownOpen={dropdownOpenJmlhHari3}
              setDropdownOpen={setDropdownOpenJmlhHari3}
              label="Jumlah Hari"
              label2="Biaya Perorang"
              textValue={formData.price3.toLocaleString("id-ID")}
              isTextInputDisabled={true}
            />
            <TextInputWithCheckbox
            id="example"
            name="example"
            value={textValue}
            label="Biaya Tour Leadert"
            checkboxLabel="Tanpa Tour Leader"
            checkboxChecked={isChecked}
            onCheckboxChange={handleCheckboxChange}
            disabled={true} 
        />
            <TextInput
              id="fee"
              name="fee"
              value={fee.toLocaleString("id-ID")}
              disabled
              label="Biaya Admin Siskopatuh"
            />
            <TextArea
              id="Deskripsi"
              name="Deskripsi"
              Deskripsi={textAreaDeskripsi}
              onChange={handleTextAreaChangeDeskripsi}
              label="Deskripsi"
              rows={5}
              disabled={false}
            />
            <TextArea
              id="Intrenasi"
              name="Intrenasi"
              Intrenasi={textAreaIntrenasi}
              onChange={handleTextAreaChangeIntrenasi}
              label="Intrenasi"
              rows={5}
              disabled={false} 
            />
          </>
        )}

        <div className="d-flex justify-content-between">
          {step > 1 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}

          <div className="d-flex justify-content-end w-100">
            <button type="submit" className="btn btn-primary">
              {step === 4 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
