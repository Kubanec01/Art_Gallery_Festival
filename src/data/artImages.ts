import imageSkullWoman from "../assets/skull-woman-art-img.webp"
import imageSkull from "../assets/skull-art-img.webp"
import imageSciFi from "../assets/scifi-art-img.webp"
import imageGoya from "../assets/goya-art-img.jpg"
import imageTransparent from "../assets/transparent-img.png"


type artImagesData = {
    id: number;
    image: string;
}

export const artImagesData:artImagesData[] = [
    {
        id: 1,
        image: `${imageSkullWoman}`,
    },
    {
        id: 2,
        image: `${imageSkull}`,
    },
    {
        id: 3,
        image: `${imageSciFi}`,
    },
    {
        id: 4,
        image: `${imageGoya}`,
    },
]