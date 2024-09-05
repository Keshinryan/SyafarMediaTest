/* eslint-disable no-unused-vars */
import { useLocation, Link } from 'react-router-dom';

const Preview = () => {
    const { state: formData } = useLocation();

    console.log(formData);
    const parseMaskapai = (maskapai) => {
        const [name, priceString] = maskapai.split(" - Rp ");
        const price = parseInt(priceString.replace(/\./g, ''), 10);
        return { name, price };
    };
    const { name: maskapaiName, price: maskapaiPrice } = parseMaskapai(formData.Maskapai);

    const parseMaskapai2 = (maskapai) => {
        const [namePart, priceString] = maskapai.split("Rp. ");
        const name = namePart.split('-')[0].trim().split('(')[0].trim();
        const price = parseInt(priceString.replace(/\./g, ''), 10);
        return { name, price };
    };
    const { name: htl1Name, price: htl1Price } = parseMaskapai2(formData.Htl);
    const { name: htl2Name, price: htl2Price } = parseMaskapai2(formData.Htl1);
    const items = [
        { name: "Tiket Pesawat", price: maskapaiPrice },
        { name: "Hotel Madinah", price: formData.price1 },
        { name: "Hotel Mekkah", price: formData.price2 },
        { name: "Jasa Mutawif", price: formData.price3 },
        { name: "Tour Leader", price: formData.price4 },
        { name: "Siskopatuh", price: 80000 } 
    ];
    const total = items.reduce((acc, item) => acc + item.price, 0);

    if (!formData) {
        return (
            <div className="container mt-5">
                <h2>No data submitted!</h2>
                <Link to="/" className="btn btn-secondary">Go Back</Link>
            </div>
        );
    }

    return (
        <div className="p-content mt-5">
            <h2>Detail Informasi</h2>
            <form>
                <div className="mt-3">
                    <div className="row">
                        <div className="col-6">Periode Bulan</div>
                        <div className="col-6 text-end">{formData.Periode}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Tanggal Berangkat</div>
                        <div className="col-6 text-end">{new Date(formData.tglbrgkt).toLocaleDateString('id-ID')}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Tanggal Pulang</div>
                        <div className="col-6 text-end">{formData.tglPlg ? new Date(formData.tglPlg).toLocaleDateString('id-ID') : '-'}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Berangkat Dari</div>
                        <div className="col-6 text-end">{formData.departfrom}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Tujuan Ke</div>
                        <div className="col-6 text-end">{formData.departto}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Paket Hari</div>
                        <div className="col-6 text-end">{formData.PaketHari}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Maskapai</div>
                        <div className="col-6 text-end">{maskapaiName}</div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-6">Jumlah Peserta</div>
                        <div className="col-6 text-end">{formData.JmlhPst}</div>
                    </div>
                </div>
                <h3>Produk LA</h3>
                <div className="mt-3">
                    <div className="row">
                        <div className="col-6">Vendor</div>
                        <div className="col-6 text-end">{formData.Vendor}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Hotel Madinah</div>
                        <div className="col-6 text-end">{htl1Name}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Hotel Bintang</div>
                        <div className="col-6 text-end">{formData.HtlBntg}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Jumlah Hari</div>
                        <div className="col-6 text-end">{formData.JmlhHari1}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Tanggal Masuk</div>
                        <div className="col-6 text-end">{new Date(formData.checkin1).toLocaleDateString('id-ID')}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Tanggal Keluar</div>
                        <div className="col-6 text-end">{new Date(formData.checkout1).toLocaleDateString('id-ID')}</div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row">
                        <div className="col-6">Vendor</div>
                        <div className="col-6 text-end">{formData.Vendor2}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Hotel Mekkah</div>
                        <div className="col-6 text-end">{htl2Name}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Hotel Bintang </div>
                        <div className="col-6 text-end">{formData.HtlBntg2}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Jumlah Hari </div>
                        <div className="col-6 text-end">{formData.JmlhHari2}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Tanggal Masuk </div>
                        <div className="col-6 text-end">{new Date(formData.checkin2).toLocaleDateString('id-ID')}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Tanggal Keluar </div>
                        <div className="col-6 text-end">{new Date(formData.checkout2).toLocaleDateString('id-ID')}</div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row">
                        <div className="col-6">Handling</div>
                        <div className="col-6 text-end">{formData.HandlingSaudia}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Mutawif</div>
                        <div className="col-6 text-end">{formData.JasaMutawif}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Perlengkapan</div>
                        <div className="col-6 text-end">{formData.Perlengkapan}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Visa Umroh</div>
                        <div className="col-6 text-end">{formData.Visa}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Transportasi</div>
                        <div className="col-6 text-end">{formData.Transportasi}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">Asuransi Perjalanan</div>
                        <div className="col-6 text-end">{formData.Asurans}</div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="">
                            <div className="row">
                                <div className="col-6">Jasa Manasik</div>
                                <div className="col-6 text-end">{formData.Manasik}</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-6">Handling Domestik</div>
                                <div className="col-6 text-end">{formData.HandlingDosmetik}</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-6">Ziarah Tambahan</div>
                                <div className="col-6 text-end">{formData.ZT}</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-6">Kereta Cepat</div>
                                <div className="col-6 text-end">{formData.KeretaCepat || '-'}</div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-6">Tour Leader</div>
                                <div className="col-6 text-end">{formData.Tl}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <h3>Detail Harga</h3>
                    <h3>Umroh Reguler</h3>
                </div>
                {items.map((item, index) => (
                    <div className="" key={index}>
                        <div className="row">
                            <div className="col-6">{item.name}</div>
                            <div className="col-6 text-end">Rp {item.price.toLocaleString('id-ID')}</div>
                        </div>
                    </div>
                ))}
                <div className="mt-3">
                            <div className="row">
                                <div className="col-6">Total</div>
                                <div className="col-6 text-end">Rp {total.toLocaleString('id-ID')}</div>
                            </div>
                        </div>
            </form>
        </div>
    );
};

export default Preview;
