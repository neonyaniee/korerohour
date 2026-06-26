import { colors } from "../src/app/styles/global"
import { onboardingItems } from "../types/OnboardingItems"

export const onboardingData: onboardingItems[] = [
    {
        backgroundColor: colors.background,
        title: "introduction",
        subtitle: "ill put something here",
        lottie:require("../assets/animations/intro.json")
    },
    {
        backgroundColor: colors.background,
        title: "features and stuff",
        subtitle: "doing anythingbut styling the page",
        lottie:require("../assets/animations/intro.json")
    },
    {
        backgroundColor: colors.background,
        title: "ok log in now",
        subtitle: "dis dont even work im getting there...",
        lottie:require("../assets/animations/intro.json")
    },
]
