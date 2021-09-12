import React from "react";
import { AlignRightOutlined, DollarOutlined, EnvironmentOutlined, SearchOutlined, EnvironmentFilled, DollarCircleFilled } from "@ant-design/icons";
import {  Form, Input, Button, Select } from "antd";

import { createRules, openNotificationWithIcon } from "libs/ultility";
import { PROVINCES } from "libs/const";
import withAuth from "auth/auth";
import style from "./search.module.scss";
import SearchList from "./_list";


const { Option } = Select;

const Search = () => {
    const prices = [
        { price: "0 - 2000000", value: "2m"},
        { price: "2000000 - 4000000", value: "4m"},
        { price: "4000000 - 6000000", value: "6m"},
        { price: "6000000 - 8000000", value: "8m"},
    ];

    const searchResult = [
        {
            id: 0,
            image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            title: "E - Rental",
            address: "221 DESCs HCMC address - address",
            acreage: 30,
            bedroom: 3,
            bathroom: 1,
            price: "10000000",
            paymentType: "month"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            title: "E - Rental Home",
            address: "221 ACS HCMC - address",
            acreage: 20,
            bedroom: 2,
            bathroom: 2,
            price: "5000000",
            paymentType: "month"
        },
        {
            id: 33,
            image: "https://images.unsplash.com/photo-1630534658718-395efda906cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            title: "E - Rental",
            address: "24 ACSC  address - address",
            acreage: 40,
            bedroom: 1,
            bathroom: 1,
            price: "20000000",
            paymentType: "month"
        },
    ];

    const onFinish = (e) => {
        console.log("finish", e);
    }

    return (
        <div className={style.search}>
            <div className={style.searchbar}>
                <Form
                    className={style.searchbar__form}
                    onFinish={onFinish}
                >
                    <div className={style.searchbar__form__menu}>
                        <Form.Item>
                            <AlignRightOutlined style={{ fontSize: "1.5em" }} />
                        </Form.Item>
                    </div>

                    <div className={style.searchbar__form__location} >
                        <div className={style.searchbar__form__location__icon}>
                            <EnvironmentOutlined />
                            {/* <EnvironmentFilled /> */}
                        </div>
                        <Form.Item name="province">
                            <Select placeholder="Toàn quốc" allowClear className={style.provinceSelect} style={{ border: "none" }}>
                                {PROVINCES.length > 0 && 
                                    PROVINCES.map(i => <Option value={i.value} key={i.id}>{i.label}</Option>)}
                            </Select>
                        </Form.Item>
                    </div>
                    
                    <div className={style.searchbar__form__price}>
                        <div className={style.searchbar__form__price__icon}>
                            <DollarOutlined />
                            {/* <DollarCircleFilled /> */}
                        </div>
                        <Form.Item  name="price">
                            <Select allowClear placeholder="Giá thuê" className={style.priceSelect}>
                                {prices.length > 0 &&
                                    prices.map(i => <Option value={i.value} key={i.value}>{i.price}</Option>)}
                            </Select>
                        </Form.Item>
                    </div>

                    <div className={style.searchbar__form__textSearch}>
                        <div className={style.searchbar__form__textSearch__icon}>
                            <SearchOutlined/>
                        </div>
                        <Form.Item name="text">
                            <Input placeholder="Tìm kiếm" name="text" className={style.searchInput} />
                        </Form.Item>
                    </div>

                    <Form.Item className={style.searchbar__form__submit}>
                        <Button htmlType="submit">Tìm kiếm</Button>
                    </Form.Item>
                </Form>
            </div>

            <div className={style.search__result}>
                <SearchList result={searchResult} />
            </div>
        </div>
    )
}

export default withAuth(Search);