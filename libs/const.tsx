import { useRouter } from "next/router";
import { Choice, Province } from "./types";


export const SERVER_API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api`;

export const LOCALSTORAGE_KEY = process.env.NEXT_PUBLIC_LOCAL_STORAGE;

export const getGoogleOauth2Url = (hostname: string) => {
    return `${process.env.NEXT_PUBLIC_SERVER_URL}/api/oauth2/authorize/google?redirect_uri=${hostname}/oauth2/redirect`;
}

export const GENDERS: Choice[] = [
    {id: 1, label: "Nam", value: 1},
    {id: 2, label: "Nữ", value: 2},
    {id: 3, label: "Khác", value: 3},
];

export const PROVINCES: Province[] = [
    {
       label: "Vĩnh Phúc",
       slug: "vinh-phuc",
       id: 26,
       value: 26,
       code: "26"
   },
   {
       label: "Ninh Bình",
       slug: "ninh-binh",
       id: 37,
       value: 37,
       code: "37"
   },
   {
       label: "Cà Mau",
       slug: "ca-mau",
       id: 96,
       value: 96,
       code: "96"
   },
   {
       label: "Nghệ An",
       slug: "nghe-an",
       id: 40,
       value: 40,
       code: "40"
   },
   {
       label: "Vĩnh Long",
       slug: "vinh-long",
       id: 86,
       value: 86,
       code: "86"
   },
   {
       label: "Quảng Bình",
       slug: "quang-binh",
       id: 44,
       value: 44,
       code: "44"
   },
   {
       label: "Hải Phòng",
       slug: "hai-phong",
       id: 31,
       value: 31,
       code: "31"
   },
   {
       label: "Hà Nội",
       slug: "ha-noi",
       id: 1,
       value: 1,
       code: "01"
   },
   {
       label: "Đồng Tháp",
       slug: "dong-thap",
       id: 87,
       value: 87,
       code: "87"
   },
   {
       label: "Lai Châu",
       slug: "lai-chau",
       id: 12,
       value: 12,
       code: "12"
   },
   {
       label: "Hưng Yên",
       slug: "hung-yen",
       id: 33,
       value: 33,
       code: "33"
   },
   {
       label: "Lạng Sơn",
       slug: "lang-son",
       id: 20,
       value: 20,
       code: "20"
   },
   {
       label: "Đồng Nai",
       slug: "dong-nai",
       id: 75,
       value: 75,
       code: "75"
   },
   {
       label: "Tiền Giang",
       slug: "tien-giang",
       id: 82,
       value: 82,
       code: "82"
   },
   {
       label: "Phú Yên",
       slug: "phu-yen",
       id: 54,
       value: 54,
       code: "54"
   },
   {
       label: "Yên Bái",
       slug: "yen-bai",
       id: 15,
       value: 15,
       code: "15"
   },
   {
       label: "Bình Dương",
       slug: "binh-duong",
       id: 74,
       value: 74,
       code: "74"
   },
   {
       label: "Quảng Nam",
       slug: "quang-nam",
       id: 49,
       value: 49,
       code: "49"
   },
   {
       label: "Điện Biên",
       slug: "dien-bien",
       id: 11,
       value: 11,
       code: "11"
   },
   {
       label: "Kon Tum",
       slug: "kon-tum",
       id: 62,
       value: 62,
       code: "62"
   },
   {
       label: "Bạc Liêu",
       slug: "bac-lieu",
       id: 95,
       value: 95,
       code: "95"
   },
   {
       label: "Đắk Lắk",
       slug: "dak-lak",
       id: 66,
       value: 66,
       code: "66"
   },
   {
       label: "An Giang",
       slug: "an-giang",
       id: 89,
       value: 89,
       code: "89"
   },
   {
       label: "Thanh Hóa",
       slug: "thanh-hoa",
       id: 38,
       value: 38,
       code: "38"
   },
   {
       label: "Quảng Ngãi",
       slug: "quang-ngai",
       id: 51,
       value: 51,
       code: "51"
   },
   {
       label: "Tây Ninh",
       slug: "tay-ninh",
       id: 72,
       value: 72,
       code: "72"
   },
   {
       label: "Bắc Giang",
       slug: "bac-giang",
       id: 24,
       value: 24,
       code: "24"
   },
   {
       label: "Hồ Chí Minh",
       slug: "ho-chi-minh",
       id: 79,
       value: 79,
       code: "79"
   },
   {
       label: "Ninh Thuận",
       slug: "ninh-thuan",
       id: 58,
       value: 58,
       code: "58"
   },
   {
       label: "Tuyên Quang",
       slug: "tuyen-quang",
       id: 8,
       value: 8,
       code: "08"
   },
   {
       label: "Sơn La",
       slug: "son-la",
       id: 14,
       value: 14,
       code: "14"
   },
   {
       label: "Nam Định",
       slug: "nam-dinh",
       id: 36,
       value: 36,
       code: "36"
   },
   {
       label: "Hà Nam",
       slug: "ha-nam",
       id: 35,
       value: 35,
       code: "35"
   },
   {
       label: "Hải Dương",
       slug: "hai-duong",
       id: 30,
       value: 30,
       code: "30"
   },
   {
       label: "Bà Rịa - Vũng Tàu",
       slug: "ba-ria-vung-tau",
       id: 77,
       value: 77,
       code: "77"
   },
   {
       label: "Kiên Giang",
       slug: "kien-giang",
       id: 91,
       value: 91,
       code: "91"
   },
   {
       label: "Cao Bằng",
       slug: "cao-bang",
       id: 4,
       value: 4,
       code: "04"
   },
   {
       label: "Hà Tĩnh",
       slug: "ha-tinh",
       id: 42,
       value: 42,
       code: "42"
   },
   {
       label: "Gia Lai",
       slug: "gia-lai",
       id: 64,
       value: 64,
       code: "64"
   },
   {
       label: "Hoà Bình",
       slug: "hoa-binh",
       id: 17,
       value: 17,
       code: "17"
   },
   {
       label: "Sóc Trăng",
       slug: "soc-trang",
       id: 94,
       value: 94,
       code: "94"
   },
   {
       label: "Bình Định",
       slug: "binh-dinh",
       id: 52,
       value: 52,
       code: "52"
   },
   {
       label: "Thái Bình",
       slug: "thai-binh",
       id: 34,
       value: 34,
       code: "34"
   },
   {
       label: "Phú Thọ",
       slug: "phu-tho",
       id: 25,
       value: 25,
       code: "25"
   },
   {
       label: "Hậu Giang",
       slug: "hau-giang",
       id: 93,
       value: 93,
       code: "93"
   },
   {
       label: "Cần Thơ",
       slug: "can-tho",
       id: 92,
       value: 92,
       code: "92"
   },
   {
       label: "Quảng Ninh",
       slug: "quang-ninh",
       id: 22,
       value: 22,
       code: "22"
   },
   {
       label: "Quảng Trị",
       slug: "quang-tri",
       id: 45,
       value: 45,
       code: "45"
   },
   {
       label: "Lào Cai",
       slug: "lao-cai",
       id: 10,
       value: 10,
       code: "10"
   },
   {
       label: "Đắk Nông",
       slug: "dak-nong",
       id: 67,
       value: 67,
       code: "67"
   },
   {
       label: "Bắc Ninh",
       slug: "bac-ninh",
       id: 27,
       value: 27,
       code: "27"
   },
   {
       label: "Lâm Đồng",
       slug: "lam-dong",
       id: 68,
       value: 68,
       code: "68"
   },
   {
       label: "Thái Nguyên",
       slug: "thai-nguyen",
       id: 19,
       value: 19,
       code: "19"
   },
   {
       label: "Bình Thuận",
       slug: "binh-thuan",
       id: 60,
       value: 60,
       code: "60"
   },
   {
       label: "Khánh Hòa",
       slug: "khanh-hoa",
       id: 56,
       value: 56,
       code: "56"
   },
   {
       label: "Bến Tre",
       slug: "ben-tre",
       id: 83,
       value: 83,
       code: "83"
   },
   {
       label: "Thừa Thiên Huế",
       slug: "thua-thien-hue",
       id: 46,
       value: 46,
       code: "46"
   },
   {
       label: "Hà Giang",
       slug: "ha-giang",
       id: 2,
       value: 2,
       code: "02"
   },
   {
       label: "Trà Vinh",
       slug: "tra-vinh",
       id: 84,
       value: 84,
       code: "84"
   },
   {
       label: "Long An",
       slug: "long-an",
       id: 80,
       value: 80,
       code: "80"
   },
   {
       label: "Bắc Kạn",
       slug: "bac-kan",
       id: 6,
       value: 6,
       code: "06"
   },
   {
       label: "Đà Nẵng",
       slug: "da-nang",
       id: 48,
       value: 48,
       code: "48"
   },
   {
       label: "Bình Phước",
       slug: "binh-phuoc",
       id: 70,
       value:70,
       code: "70"
   }
]