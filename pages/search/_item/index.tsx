import React from "react";
import { BookOutlined, DollarOutlined, EnvironmentOutlined, GithubOutlined } from "@ant-design/icons";

import style from "./searchItem.module.scss";

const SearchItem = ({ detail }) => {

    return (
        <div className={style.container}>
            <div className={style.item__card}>
                <div className={style.item__card__image}>
                    <img src={detail.image} alt="" />
                </div>

                <div className={style.item__card__detail}>
                    <div className={style.item__card__detail__title}>
                        <p>{detail.title}</p>
                    </div>
                    <div className={style.item__card__detail__address}>
                        <EnvironmentOutlined style={{ fontSize: "20px" }}/>&nbsp;
                        <p>{detail.address}</p>
                    </div>
                    <div className={style.item__card__detail__rooms}>
                        <div className={style.item__card__detail__rooms__acreage}>
                            {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
                            <EnvironmentOutlined style={{ fontSize: "20px" }} />&nbsp;
                            <p>{detail.acreage}</p>
                        </div>
                        <div className={style.item__card__detail__rooms__bedroom}>
                            <EnvironmentOutlined style={{ fontSize: "20px" }} />&nbsp;
                            <p>{detail.bedroom}</p>
                        </div>
                        <div className={style.item__card__detail__rooms__bathroom}>
                            <EnvironmentOutlined style={{ fontSize: "20px" }} />&nbsp;
                            <p>{detail.bathroom}</p>
                        </div>
                    </div>
                    <div className={style.item__card__detail__bottomContent}>
                        <div className={style.item__card__detail__price}>
                            <DollarOutlined style={{ fontSize: "20px" }} />&nbsp;
                            <p>{detail?.price} / {detail.paymentType}</p>
                        </div>
                        <div className={style.item__card__detail__rate}>
                            <GithubOutlined style={{ fontSize: "20px" }}/>
                            <GithubOutlined style={{ fontSize: "20px" }}/>
                            <GithubOutlined style={{ fontSize: "20px" }}/>
                        </div>
                    </div>
                </div>

                <div className={style.saveBookmark}>
                    <BookOutlined style={{ fontSize: "20px" }}/>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;