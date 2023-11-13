import React from "react";
import { useEffect } from "react";

export const API =
  "https://dimondshop2-3c83d-default-rtdb.europe-west1.firebasedatabase.app/";
export default function FirebaseDatas() {
  useEffect(() => {
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //get
    //get
    //get
    //get
    //get
    //get
    fetch(`${API}users.json`)
      .then((res) => res.json())
      .then((allData) => {
        // console.log(allData);
      });

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    //products
    // MemoryCard:{},
    // NetworkTools:{},
    // DigitalProduct:{},
    // PcAndAccessories:{},
    // Headphones:{}
    const products = [
      {
        category: "MemoryCard , PcAndAccessories",
        id: 1,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-1.jpg",
        model: "Adata HD770G External Hard Drive - 2TB",
        name: "هارد اکسترنال ای دیتا مدل HD770G ظرفیت 2 ترابایت",
        price: 321000,
      },
      {
        category: "NetworkTools , ",
        id: 2,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/447ae73de9aa2f90c06bb786abc86768-1-2.jpg",
        model: "D-Link DSL-224 VDSL2 and ADSL2 Plus N300 Wireless Router",
        name: "مودم روتر بی سیم ADSL2 Plus و VDSL2 دی لینک مدل DSL-224",
        price: 580000,
      },
      {
        category: "DigitalProduct , PcAndAccessories",
        id: 3,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-2.jpg",
        model: "Verity V-MS5128 Wired Mouse",
        name: "ماوس وریتی مدل V-MS5128",
        price: 123000,
      },
      {
        category: "PcAndAccessories , Headphones",
        id: 4,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-3.jpg",
        model: "TSCO TH5398 Headphones",
        name: "هدست بلوتوث تسکو مدل TH5398",
        price: 1520000,
      },
      {
        category: "PcAndAccessories",
        id: 5,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product_10247_1610967284_76769.webp",
        model: "iMac stock A1311 I5 edited",
        name: "آی مک استوک A1311 I5 ویرایش شده با مشخصات فوق سرعتی",
        price: 898000,
      },
      {
        category: "DigitalProduct , PcAndAccessories",
        id: 6,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/dafeb5ad9dd9c767c4af9c6c9e3ed508-1.jpg",
        model: "Provan keyboard model PKC10",
        name: "کیبورد پرووان مدل PKC10",
        price: 154000,
      },
      {
        category: "NetworkTools ",
        id: 7,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/76c684309ea2244f5ddffc3b547ef1dc.jpg",
        model: "N300 Wireless ADSL2 Plus Modem Router",
        name: "مودم روتر ADSL2 Plus بی‌سیم N300 تی پی-لینک مدل TD-W8961N",
        price: 1450000,
      },
      {
        category: "MemoryCard , PcAndAccessories",
        id: 8,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/042b4559c4ac22a1e0561571cc0db23b.jpg",
        model: "MicroSDHC memory card slot",
        name: "کارت حافظه MicroSDHC بکسو UHS-I U1 سرعت 65MBps ظرفیت 16 گیگابایت",
        price: 12650000,
      },
      {
        category: "DigitalProduct , PcAndAccessories",
        id: 9,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/97c8f20f33f1efdb3e12c2e7e688fbc1.jpg",
        model:
          "External hard drive Seagate model Expansion Portable STKM1000400",
        name: "هارد اکسترنال سیگیت مدل Expansion Portable STKM1000400 ظرفیت 1 ترابایت",
        price: 799000,
      },
      {
        category: " Headphones",
        id: 10,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/145c0f6b13c285180ed331aa026dd47a-1.jpg",
        model: "K-TW15 K-TW15 Bluetooth handsfree",
        name: "هندزفری بلوتوثی کلومن مدل K-TW15",
        price: 199000,
      },
      {
        category: "DigitalProduct , PcAndAccessories",
        id: 11,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/976d83d1184d5105dfd61f5e84ccdc29.jpg",
        model: "Silicon Power flash memory model Touch T06 capacity 32 GB",
        name: "فلش مموری سیلیکون پاور مدل Touch T06 ظرفیت 32 گیگابایت",
        price: 99000,
      },
      {
        category: "PcAndAccessories , Headphones",
        id: 12,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/8305a1261130441edf0455f1f3a8d7b8.jpg",
        model: "Basseus bluetooth headphones model Encok-NGWM01",
        name: "هدفون بلوتوثی باسئوس مدل Encok-NGWM01",
        price: 50000,
      },
      {
        category: "PcAndAccessories",
        id: 13,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/c1de2c764e7200f14f167501c598f088.jpg",
        model: "Tesco wireless mouse model TM 661W",
        name: "ماوس بی سیم تسکو مدل TM 661W",
        price: 123200000,
      },
      {
        category: "PcAndAccessories",
        id: 14,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/dafeb5ad9dd9c767c4af9c6c9e3ed508.jpg",
        model: "Repo K2800 wireless keyboard",
        name: "کیبورد بی سیم رپو مدل K2800",
        price: 1200000,
      },
      {
        category: "PcAndAccessories , Headphones",
        id: 15,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/ee736eae5676e99b44e0fbc7251799e8.jpg",
        model: "Mickey Mouse DR-37 bluetooth headset",
        name: "هدست بلوتوث مدل Mickey Mouse DR-37",
        price: 65000000,
      },
      {
        category: "MemoryCard , PcAndAccessories",
        id: 16,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/5a42381c2aac953ba7fd054d1b5c5178.jpg",
        model: "V827 USB3.0 V827 flash memory with a capacity of 64 GB",
        name: "فلش مموری وریتی مدل V827 USB3.0 ظرفیت 64 گیگابایت",
        price: 890000,
      },
    ];
    fetch(`${API}products.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((allData) => {
        // console.log(allData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    //
    //
    //
    //
    //week
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //  todayOff
    //  todayOff
    //  todayOff
    //  todayOff
    //  todayOff
    //  todayOff
    //  todayOff
    //  todayOff
    //  todayOff
    //  todayOff
    //  todayOff
    //
    let todayOff = [
      {
        id: 1,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/ee736eae5676e99b44e0fbc7251799e8.jpg",
        name: "هدست بلوتوث مدل Mickey Mouse DR-37",
        model: "Mickey Mouse DR-37 bluetooth headset",
        price: 65000000,
        category: "PcAndAccessories , Headphones",
        priceBeforeOff: "75000000",
      },
      {
        id: 2,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/5a42381c2aac953ba7fd054d1b5c5178.jpg",
        name: "فلش مموری وریتی مدل V827 USB3.0 ظرفیت 64 گیگابایت",
        model: "V827 USB3.0 V827 flash memory with a capacity of 64 GB",
        price: 890000,
        category: "MemoryCard , PcAndAccessories",
        priceBeforeOff: 990000,
      },

      {
        id: 3,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-4.jpg",
        name: "رم دسکتاپ DDR4 تک کاناله 2666 مگاهرتز کروشیال ظرفیت 8 گیگابایت",
        model: "Desktop RAM DDR4 single channel 2666",
        price: 1100000,
        category: "MemoryCard , PcAndAccessories",
        priceBeforeOff: 1300000,
      },
    ];
    fetch(`${API}todaysOff.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todayOff),
    })
      .then((res) => res.json())
      .then((allData) => {
        // console.log(allData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    //
    //
    //
    //
    //
    //
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales
    // WeeklyMostSales

    let WeeklyMostSales = [
      {
        id: 1,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/976d83d1184d5105dfd61f5e84ccdc29.jpg",
        name: "فلش مموری سیلیکون پاور مدل Touch T06 ظرفیت 32 گیگابایت",
        model: "Silicon Power flash memory model Touch T06 capacity 32 GB",
        price: "99000",
        category: "DigitalProduct , PcAndAccessories",
      },
      {
        id: 2,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/8305a1261130441edf0455f1f3a8d7b8.jpg",
        name: "هدفون بلوتوثی باسئوس مدل Encok-NGWM01",
        model: "Basseus bluetooth headphones model Encok-NGWM01",
        price: "50000",
        category: "PcAndAccessories , Headphones",
      },

      {
        id: 3,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/c1de2c764e7200f14f167501c598f088.jpg",
        name: "ماوس بی سیم تسکو مدل TM 661W",
        model: "Tesco wireless mouse model TM 661W",
        price: "123,200,000",
        category: "PcAndAccessories",
      },
    ];
    fetch(`${API}WeeklyMostSales.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(WeeklyMostSales),
    })
      .then((res) => res.json())
      .then((allData) => {
        // console.log(allData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //artickls
    //artickls
    //artickls
    //artickls
    //artickls
    //artickls
    //artickls
    //artickls
    //artickls
    //artickls
    //artickls
    //artickls
    //
    //
    //
    //Cinema
    //SelectedByTheEditor
    //BooksAndLiterature
    //ScienceAndTechnology
    const articles = [
      {
        id: 1,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-8.jpg",
        title: "۱۰ بازیگر که با نقش‌های منفی اسکار گرفتند",
        StudyTimeline: 5,
        category: "Cinema",
        author: { img: "", name: "", date: " یک سال قبل" },
        description:
          "گاهی بازی در نقش شخصیت‌های منفی، سخت‌تر از بازی در قالب قطب مثبت ماجرا است. به ویژه اگر آن شخصیت خویی وحشی هم داشته باشد…",
      },
      {
        id: 2,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/Android-update-installing-840w-472h.jpg",
        title: "اندروید ۱۳ آپدیت بی‌وقفه را راحت‌تر می‌کند",
        StudyTimeline: 1,
        category: "SelectedByTheEditor",
        author: { img: "", name: "", date: " یک سال قبل" },
        description:
          "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت، شیائومی…",
      },
      {
        id: 3,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/09/blog-3.jpg",
        title: "دوربین ورزشی اکشن برند دیجی رونمایی شد",
        StudyTimeline: 5,
        category: "SelectedByTheEditor",
        author: { img: "", name: "", date: " یک سال قبل" },
        description:
          "لورم ایپسوم متن ساختگی با تولید نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      },
      {
        id: 4,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/09/blog4.jpg",
        title: "کتاب‌هایی با شخصیت‌های منزوی؛ در باب تنهایی",
        StudyTimeline: 3,
        category: "BooksAndLiterature",
        author: { img: "", name: "", date: " یک سال قبل" },
        description:
          "لورم ایپسوم متن ساختگی با تولید نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      },
      {
        id: 5,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-11.jpg",
        title: "جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند",
        StudyTimeline: 6,
        category: "ScienceAndTechnology",
        author: { img: "", name: "", date: " یک سال قبل" },
        description:
          "روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت…",
      },
      {
        id: 6,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/dynamic-island.jpg",
        title: "شیائومی جزیره پویا را به ردمی K60 اضافه نمی‌کند",
        StudyTimeline: 4,
        category: "ScienceAndTechnology",
        author: { img: "", name: "", date: " یک سال قبل" },
        description:
          "پیش‌تر خبری منتشر شد مبنی بر اینکه شیائومی می‌خواهد قابلیت جزیره پویا را به ردمی K60 اضافه کند؛ اما حالا متوجه شده‌ایم این اتفاق…",
      },
      {
        id: 7,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/nvidia_gpu.jpg",
        title:
          "فناوری DLSS 3 می‌تواند به گرافیک‌های قدیمی انویدیا هم اضافه شود",
        StudyTimeline: 5,
        category: "ScienceAndTechnology",
        author: { img: "", name: "", date: " یک سال قبل" },
        description:
          "اگرچه وقتی فناوری DLSS 3 رونمایی شد، در خبرها خواندیم این قابلیت منحصرا برای کارت‌های سری RTX 40 در دسترس قرار خواهد داشت…",
      },
      {
        id: 8,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/Google-2-5.jpg",
        title: "گوگل دکمه‌ی دستیار صوتی پیکسل واچ را به نمایش گذاشت",
        StudyTimeline: 3,
        category: "ScienceAndTechnology",
        author: { img: "", name: "", date: " یک سال قبل" },
        description:
          "تا زمان رونمایی رسمی از محصولات جدید گوگل در رویداد ۱۴ مهر (۶ اکتبر) فاصله چندان زیادی باقی نمانده است. گوگل در همین راستا…",
      },
      {
        id: 9,
        img: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/09/blog-2.jpg",
        title: "سامسونگ شاید کلید فیزیکی را کاملا از گوشی‌هایش حذف کند",
        StudyTimeline: 6,
        category: "ScienceAndTechnology",
        author: { img: "", name: "", date: " یک سال قبل" },
        description:
          "لورم ایپسوم متن ساختگی با تولید نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      },
    ];

    fetch(`${API}articles.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articles),
    })
      .then((res) => res.json())
      .then((allData) => {
        // console.log(allData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <div></div>;
}

// // ///////////testtt///////////////////////////////////
// var divElements = document.querySelectorAll(
//   ".elementor-element.elementor-element-02c3a62.elementor-widget.elementor-widget-image"
// );

// // Create an empty array to store the src values
// var Data = [];

// // Iterate over each div element using a forEach loop
// divElements.forEach(function (divElement) {
//   // Select the img element inside the div
//   var imgElement = divElement.querySelector("img");

//   // Check if the img element exists before trying to access its attributes
//   if (imgElement) {
//     // Get the src attribute of the img element and assign it to a variable
//     var imgSrc = imgElement.getAttribute("src");

//     // Add the src value to the imgSrcArray array
//     Data.push({
//       id: 2,
//       img: imgSrc,
//       name: "مودم روتر بی سیم ADSL2 Plus و VDSL2 دی لینک مدل DSL-224",
//       model: "D-Link DSL-224 VDSL2 and ADSL2 Plus N300 Wireless Router",
//       price: 799_000,

//     });
//   }
// });

// let Nametag = document.querySelectorAll(
//   ".elementor-element.elementor-element-9b1b724.elementor-widget.elementor-widget-heading"
// );

// Nametag.forEach((parentTag, index) => {
//   let aTag = parentTag.querySelector("a");
//   Data[index].name = aTag.innerHTML;
// });

// let info = document.querySelectorAll(
//   ".elementor-element.elementor-element-6f03da7.elementor-widget.elementor-widget-heading"
// );

// info.forEach((parentTag, index) => {
//   let aTag = parentTag.querySelector("span");
//   Data[index].model = aTag.innerHTML;
// });

// let price = document.querySelectorAll(

//   ".elementor-element.elementor-element-612c42f.jedv-enabled--yes.elementor-widget.elementor-widget-jet-listing-dynamic-field"
// );

// price.forEach((parentTag, index) => {

//   let aTag = parentTag.querySelector(".jet-listing-dynamic-field__content");
//   Data[index].price = aTag.innerHTML;
//   category:'',
//   Data[index].id = index + 1;
// });

// console.log(Data);
// ///////////////a tag///////////////////////////
// let Nametag = document.querySelectorAll(".elementor-widget-heading");

// Nametag.forEach((parentTag) => {
//   let aTag = parentTag.querySelector("a");
//   if (aTag) {
//     console.log(aTag.innerHTML);
//   }
// });

// let Nametag = document.querySelectorAll(
//   ".elementor-element.elementor-element-9b1b724.elementor-widget.elementor-widget-heading"
// );

// Nametag.forEach((parentTag, index) => {
//   let aTag = parentTag.querySelector("a");
//   if (aTag) {
//     console.log(aTag.innerHTML, index);
//   }
// });

// ///////////////////info/////////////

// let parentTags = document.querySelectorAll(
//   ".elementor-element.elementor-element-6f03da7.elementor-widget.elementor-widget-heading"
// );

// parentTags.forEach((parentTag) => {
//   let aTag = parentTag.querySelector("span");
//   if (aTag) {
//     console.log(aTag.innerHTML);
//   }
// });

// //////////price//////////
// let parentTags = document.querySelectorAll(
//   ".elementor-element.elementor-element-612c42f.jedv-enabled--yes.elementor-widget.elementor-widget-jet-listing-dynamic-field"
// );

// parentTags.forEach((parentTag) => {
//   let aTag = parentTag.querySelector(".jet-listing-dynamic-field__content");
//   if (aTag) {
//     console.log(aTag.innerHTML);
//   }
// });
// ///////////////////////////dddddddddddddddddd
// var mainElement = document.querySelectorAll(
//   ".elementor-element.elementor-element-a838bcd.e-flex.e-con-boxed.e-con.e-parent"
// );

// var divElements = document.querySelectorAll(
//   ".elementor-element.elementor-element-02c3a62.elementor-widget.elementor-widget-image"
// );
// var imgSrcArray = [];

// mainElement.forEach(function (divElement) {

//   var imgElement = divElement.querySelector("img");

//   var imgSrc = imgElement.getAttribute("src");
// let Nametag = document.querySelectorAll(".elementor-widget-heading");

//   let aTag = Nametag.querySelector("a");

//   imgSrcArray.push({
//     id: 2,
//     img: imgSrc,
//     name: aTag.innerHTML,
//     model: "D-Link DSL-224 VDSL2 and ADSL2 Plus N300 Wireless Router",
//     price: 799_000,

//   });
// });

// // console.log(imgSrcArray);
// [
//   {
//     id: 1,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-1.jpg",
//     name: "هارد اکسترنال ای دیتا مدل HD770G ظرفیت 2 ترابایت",
//     model: "Adata HD770G External Hard Drive - 2TB",
//     price: "321,000",
//     category:'',
//   },
//   {
//     id: 2,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/447ae73de9aa2f90c06bb786abc86768-1-2.jpg",
//     name: "مودم روتر بی سیم ADSL2 Plus و VDSL2 دی لینک مدل DSL-224",
//     model: "D-Link DSL-224 VDSL2 and ADSL2 Plus N300 Wireless Router",
//     price: "580,000",
//     category:'',
//   },
//   {
//     id: 3,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-2.jpg",
//     name: "ماوس وریتی مدل V-MS5128",
//     model: "Verity V-MS5128 Wired Mouse",
//     price: "123,000",
//     category:'',
//   },
//   {
//     id: 4,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-3.jpg",
//     name: "هدست بلوتوث تسکو مدل TH5398",
//     model: "TSCO TH5398 Headphones",
//     price: "1,520,000",
//     category:'',
//   },
//   {
//     id: 5,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product_10247_1610967284_76769.webp",
//     name: "آی مک استوک A1311 I5 ویرایش شده با مشخصات فوق سرعتی",
//     model: "iMac stock A1311 I5 edited",
//     price: "898,000",
//     category:'',
//   },
//   {
//     id: 6,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/dafeb5ad9dd9c767c4af9c6c9e3ed508-1.jpg",
//     name: "کیبورد پرووان مدل PKC10",
//     model: "Provan keyboard model PKC10",
//     price: "154,000",
//     category:'',
//   },
//   {
//     id: 7,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/76c684309ea2244f5ddffc3b547ef1dc.jpg",
//     name: "مودم روتر ADSL2 Plus بی‌سیم N300 تی پی-لینک مدل TD-W8961N",
//     model: "N300 Wireless ADSL2 Plus Modem Router",
//     price: "1,450,000",
//     category:'',
//   },
//   {
//     id: 8,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/042b4559c4ac22a1e0561571cc0db23b.jpg",
//     name: "کارت حافظه MicroSDHC بکسو UHS-I U1 سرعت 65MBps ظرفیت 16 گیگابایت",
//     model: "MicroSDHC memory card slot",
//     price: "12,650,000",
//     category:'',
//   },
//   {
//     id: 9,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/97c8f20f33f1efdb3e12c2e7e688fbc1.jpg",
//     name: "هارد اکسترنال سیگیت مدل Expansion Portable STKM1000400 ظرفیت 1 ترابایت",
//     model: "External hard drive Seagate model Expansion Portable STKM1000400",
//     price: "799000",
//     category:'',
//   },
//   {
//     id: 10,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/145c0f6b13c285180ed331aa026dd47a-1.jpg",
//     name: "هندزفری بلوتوثی کلومن مدل K-TW15",
//     model: "K-TW15 K-TW15 Bluetooth handsfree",
//     price: "199000",
//     category:'',
//   },
//   {
//     id: 11,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/976d83d1184d5105dfd61f5e84ccdc29.jpg",
//     name: "فلش مموری سیلیکون پاور مدل Touch T06 ظرفیت 32 گیگابایت",
//     model: "Silicon Power flash memory model Touch T06 capacity 32 GB",
//     price: "99000",
//     category:'',
//   },
//   {
//     id: 12,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/8305a1261130441edf0455f1f3a8d7b8.jpg",
//     name: "هدفون بلوتوثی باسئوس مدل Encok-NGWM01",
//     model: "Basseus bluetooth headphones model Encok-NGWM01",
//     price: "50000",
//     category:'',
//   },

//   {
//     id: 13,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/c1de2c764e7200f14f167501c598f088.jpg",
//     name: "ماوس بی سیم تسکو مدل TM 661W",
//     model: "Tesco wireless mouse model TM 661W",
//     price: "123,200,000",
//     category:'',
//   },
//   {
//     id: 14,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/dafeb5ad9dd9c767c4af9c6c9e3ed508.jpg",
//     name: "کیبورد بی سیم رپو مدل K2800",
//     model: "Repo K2800 wireless keyboard",
//     price: "1,200,000",
//     category:'',
//   },
//   {
//     id: 15,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/ee736eae5676e99b44e0fbc7251799e8.jpg",
//     name: "هدست بلوتوث مدل Mickey Mouse DR-37",
//     model: "Mickey Mouse DR-37 bluetooth headset",
//     price: "65,000,000",
//     category:'',
//   },
//   {
//     id: 16,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/5a42381c2aac953ba7fd054d1b5c5178.jpg",
//     name: "فلش مموری وریتی مدل V827 USB3.0 ظرفیت 64 گیگابایت",
//     model: "V827 USB3.0 V827 flash memory with a capacity of 64 GB",
//     price: "890000",
//     category:'',
//   },
//   {
//     id: 17,
//     img: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-4.jpg",
//     name: "رم دسکتاپ DDR4 تک کاناله 2666 مگاهرتز کروشیال ظرفیت 8 گیگابایت",
//     model: "Desktop RAM DDR4 single channel 2666",
//     price: "1100000",
//     category:'',
//   },
// ];
