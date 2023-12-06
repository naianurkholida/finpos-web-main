import PriceArea from "../../price/price-area"
import { Swiper, SwiperSlide } from "swiper/react";

const PriceList = () => {
    const packages = [
        {
            title: 'Starter',
            price_year : new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(1290000).replace("Rp", "").replace(",00",""),
            price_month : new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(129000).replace("Rp", "").replace(",00",""),
            // active: false,
            sm_title: 'Minimal kontrak 3 bulan',
            list: ['2 Halaman', 'Free Domain', 'Free Setup', '1 Free Image Basic Edit','Google Analitik' ,'Chat Link WhatsApp', 'Report Bulanan'],
            
        },
        {
            title: 'Pro',
            price_year : new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(4590000).replace("Rp", "").replace(",00",""),
            price_month : new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(459000).replace("Rp", "").replace(",00",""),
            active: true,
            sm_title: 'Minimal kontrak 12 bulan',
            sm_service:'',
            list: ['6 Halaman', 'Free Domain', 'Free Setup','3 free image basic edit ', '3 free artikel basic','Google Analitik', 'Facebook pixel', 'Chat Link WhatsApp','Live Chat Bitrix', 'Report bulanan'],
            
        },
        {
            title: 'Basic',
            price_year : new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(2590000).replace("Rp", "").replace(",00",""),
            price_month : new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(259000).replace("Rp", "").replace(",00",""),
            // active: false,
            sm_title: 'Minimal kontrak 6 bulan',
            sm_service:'',
            list: ['4 Halaman', 'Free Domain', 'Free Setup','1 free image basic edit' ,'1 free artikel basic','Google Analitik','Chat Link WhatsApp', 'Report bulanan']
        },
        {
            title: 'Bisnis',
            price_year : new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(7590000).replace("Rp", "").replace(",00",""),
            price_month : new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(759000).replace("Rp", "").replace(",00",""),
            // active: false,
            sm_title: 'Minimal kontrak 12 blan',
            sm_service:'',
            list: ['10 Halaman', 'Free Domain', 'Free Setup', '4 free image basic edit','4 free artikel basic','Google Analitik','Facebook Pixel','Chat Link WhatsApp', 'Live chat Bitrix', 'CRM basic', 'POS basic', 'Report Bulanan']
        },
        {
            title: 'Enterprise',
            price_month: 'Custom',
            price_year: 'Custom',
            // active: false,
            sm_title: '',
            list: ['Custom',]
        },
    ];
   
    return (
        <>
            <div className="price-bg">
                <div class="row pt-50">
                    <div class="col-xl-12">
                        <div class="tp-blog-section-box text-center pb-15">
                            <h2 class="tp-title text-white">Harga &amp; Paket</h2>
                            <PriceArea packages={packages} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceList