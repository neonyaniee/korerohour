import { colors } from "../src/app/styles/global"
import { onboardingItems } from "../types/OnboardingItems"

export const onboardingData: onboardingItems[] = [
    {
        backgroundColor: colors.background,
        title: "introduction",
        subtitle: "desc desc desc",
        lottie:require("../assets/animations/intro.json")
    },
    {
        backgroundColor: colors.background,
        title: "features and stuff",
        subtitle: "desc desc desc",
        lottie:require("../assets/animations/intro.json")
    },
    {
        backgroundColor: colors.background,
        title: "ok log in now",
        subtitle: "desc desc desc",
        lottie:require("../assets/animations/intro.json")
    },
]
