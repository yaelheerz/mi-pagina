import Head from "next/head";
import { styled } from "../../stitches.config";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedText from "../components/AnimatedText";
import { TitleWrapper } from "../components/CommonPageStyles";

export default function About() {
    return (
        <AnimatedPage>
            <Head>
                <title>yael — about</title>
                <meta
                    name="description"
                    content="hey, i'm yael, an 18-year-old software engineer and designer based in Spain. I strive to build unique and polished web interfaces for both consumer and business ends. I love football, cats, and design cool stuff! I'm currently working on telefonica."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="" />
            </Head>

            <TitleWrapper>
                <AnimatedText element="h1" text="About" />
            </TitleWrapper>
            <p>
                hey, I'm yael, an 18-year-old software developer and UX/UI designer based in Spain. I strive to build unique and polished web interfaces for both consumer and business ends. I love football, cats, and design cool stuff!
                <br />
                <br />
                Currently working on{" "}
                <a href="https://www.garajedeideas.es/" target="_blank" rel="noreferrer">
                    Garaje de Ideas
                </a>
            </p>
        </AnimatedPage>
    );
}
