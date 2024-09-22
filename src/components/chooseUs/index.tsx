"use client";
import Image from "next/image";
import onlineIcon from "@/images/icon-online.svg";
import budgetingIcon from "@/images/icon-budgeting.svg";
import onboardingIcon from "@/images/icon-onboarding.svg";
import apiIcon from "@/images/icon-api.svg";
const chooseUsCards = [
    {
        title: "Online Banking",
        img: onlineIcon,
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
        title: "Budgeting",
        img: budgetingIcon,
        description: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
        title: "Fast Onboarding",
        img: onboardingIcon,
        description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
        title: "Open API",
        img: apiIcon,
        description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
]
export default function ChooseUs() {
    return(
        <>
          <section className="px-5">
            <p className="text-center text-md-start mb-3 fs-3">Why choose Easybank?</p>
            <p className="text-center text-md-start mb-5 fs-6 text-secondary w-md-50">
                We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
            </p>
            <div className="row">
                {
                    chooseUsCards.map((card, index) => (
                        <div key={index} className="flex flex-column align-items-center justify-content-center text-center text-md-start col-12 col-sm-6 col-md-3 pe-md-2 mb-3">
                            <Image src={card.img} alt={card.title} className="img-fluid mb-3 ps-md-2" />
                            <h6 className="mb-3">{card.title}</h6>
                            <p className="text-secondary fs-6">{card.description}</p>
                        </div>
                    ))
                }
            </div>
          </section>
        </>
    )
}