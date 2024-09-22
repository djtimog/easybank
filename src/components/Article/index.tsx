"use client";
import Image from "next/image";
import currencyImage from "@/images/image-currency.jpg";
import restaurantImage from "@/images/image-restaurant.jpg";
import planeImage from "@/images/image-plane.jpg";
import confettiImage from "@/images/image-confetti.jpg";

const articleCards = [
    {
        title: "Receive money in any currency with no fees",
        authur: "Claire Robinson",
        img: currencyImage,
        description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    },
    {
        title: "Treat yourself without worrying about money",
        authur: "Wilson Hutton",
        img: restaurantImage,
        description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    },
    {
        title: "Take your Easybank card wherever you go",
        authur: "Wilson Hutton",
        img: planeImage,
        description: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
    },
    {
        title: "Our invite-only Beta accounts are now live!",
        authur: "Claire Robinson",
        img: confettiImage,
        description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
]
export default function Article() {
    return(
        <>
          <section className="px-5">
            <p className="text-center text-md-start mb-3 fs-3">Lastest Articles</p>
            <div className="row">
                {
                    articleCards.map((card, index) => (
                        <div className="card col-12 col-sm-6 col-md-3 mb-3 shadow border-0" key={index}>
                            <Image src={card.img} className="card-img-top img-fluid mb-3" alt={card.title}/>
                            <div className="card-body p-3 text-start">
                                <h6 className="card-subtitle mb-2 text-muted">by {card.authur}</h6>
                                <h5 className="card-title text-secondary mb-3"><b>{card.title}</b></h5>
                                <p className="card-text text-secondary">{card.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
          </section>
        </>
    )
}