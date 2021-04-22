<template>
  <div class="widget pages">
    <h3>
      <slot></slot>
    </h3>
    <ul>
      <li v-for="card in getAllCards" :key="card.id">
        <router-link
          :to="card.slug"
          tag="div"
          class="max-w-sm w-full lg:max-w-full lg:flex"
        >
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style="
              background-image: url('https://res.cloudinary.com/evanagee/image/upload/c_scale,h_400/v1580267636/VueWP/Youtube-bg_00240.jpg');
            "
            title="Woman holding a mug"
          ></div>
          <div
            class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                {{ card.title.rendered }}
              </div>
            </div>
            <div
              v-for="questions in card.questions"
              :key="questions.id"
              class="flex items-center"
            >
              {{ questions.question }}
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- <div v-else>Loading...</div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // getAllCards() {
    //   return this.$store.getters.allCards;
    // },
    ...mapGetters({
      getAllCards: "allCards",
    }),
  },

  mounted() {
    this.$store.dispatch("getCards");
  },
};
</script>
