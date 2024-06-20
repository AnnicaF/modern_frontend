<script setup>
// Components
import HeroBanner from "@/components/HeroBanner.vue";
import IntroSubscription from "@/components/IntroSubscription.vue";
import CardComponent from "@/components/CardComponent.vue";
import InstallApp from "@/components/InstallApp.vue";
</script>

<template>
  <main>
    <HeroBanner :height="524" imageName="Geo_Have_06.webp" />
    <InstallApp />
    <IntroSubscription
      title="Velkommen til haven"
      body="Geografisk Have Kolding er en 14 hektar stor, botanisk have, hvor det geografiske relaterer sig til, at træer, buske og urter er plantet sammen efter oprindelsesland. Grundlæggeren Aksel Olsen købte jorden og startede stedet som planteskole i 1918. Han havde en stor interesse for planter fra hele verden og især fra Østasien..."
      buttonText="Læs mere"
      :intro="true"
      :buttonAlt="true"
      imageName="Logo_icon_no_text.svg"
    />
    <CardComponent
      title="tilbud og rabatter"
      category="Eksklusive"
      body="Modtag særlige tilbud og rabatter på alt fra billetter og årskort til cafévarer og merchandise i vores butik. Modtag særlige tilbud og rabatter på alt fra billetter og årskort til cafévarer og merchandise i vores butik."
      imageName="Geo_Have_05.webp"
      buttonText="Læs mere"
      :imageFirst="true"
    />

    <CardComponent
      title="begivenheder"
      category="Kommende"
      body="I Geografisk Have holder vi mange spændende events og aktiviteter hele året rundt. Herunder Grøn Have Festival, Plantemarked, Bæredygtigt Julemarked, Sankt Hans og mange flere..."
      imageName="Geo_Have_03.webp"
      buttonText="Læs mere"
      :imageFirst="false"
    />

    <CardComponent
      title="havens dyr"
      category="Besøg"
      body="I Geografisk Have har vi forskellige dyr, du kan komme helt tæt på. Kom og hils på havens klappegeder, høns, klippeegern, ponyer og kaniner. Læs mere om hvilke spændende dyr, du kan opleve i dyrefolden..."
      imageName="Geo_Have_01.webp"
      buttonText="Læs mere"
      :imageFirst="true"
    />

    <CardComponent
      title="festen i haven"
      category="Hold"
      body="Lad Geografisk Have danne en stemningsfuld og eventyrlig ramme for dit næste arrangement. Haven er et helt unikt sted at holde bryllup, konfirmation, barnedåb og fødselsdag i inspirerende og skønne..."
      imageName="Geo_Have_04.webp"
      buttonText="Læs mere"
      :imageFirst="false"
    />

    <IntroSubscription
      title="Bliv en del af klubben"
      body="Som medlem af vores kundeklub får du adgang til en verden af eksklusive fordele og særlige oplevelser i vores smukke have. Vores kundeklub er designet til at give vores trofaste gæster en ekstraordinær oplevelse, hvor I kan nyde alt det, haven har at byde på, samt få adgang til særlige rabatter og arrangementer."
      buttonText="Bliv medlem"
      imageName="Kundeklub_kort.webp"
      :buttonAlt="true"
    />
  </main>
</template>
