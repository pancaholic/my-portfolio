"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(
    () => {
        return import ("react-animated-numbers")
    }, 
    {ssr: false}
    )

const achievementsList = [
    {
        metric: "Projects",
        value: "5",
        postfix: "+"
    },
    {
        metric: "Skills",
        value: "10",
        postfix: "+"
    },
    {
        metric: "Experience",
        value: "5",
        postfix: "+"
    },
    {
        metric: "Years",
        value: "1",
    },
]

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
            {
                achievementsList.map((achievements, index) => {
                    return (
                        <div  
                        key={index} 
                        className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                {achievements.prefix}
                                <AnimatedNumbers 
                                includeComma
                                animateToNumber={parseInt(achievements.value)}
                                locale="en-US"
                                className="text-white text-4xl font-bold"
                                configs={(_, index) => {
                                    return {
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1),
                                    };
                                }}
                                />
                                {achievements.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">
                                {achievements.metric}
                            </p>
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default AchievementsSection
