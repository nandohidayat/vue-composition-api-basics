import {
  computed,
  nextTick,
  onBeforeMount,
  onMounted,
  reactive,
  watch,
} from "vue";

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

export function useCounter() {
  onBeforeMount(() => {
    console.log("before mount");
  });

  watch(
    () => counterData.count,
    (newCount) => {
      if (newCount === 20) alert("Way to go! you made it to 20!");
    }
  );

  const oddOrEven = computed(() => {
    return counterData.count % 2 === 0 ? "even" : "odd";
  });

  const increaseCounter = async (amount) => {
    counterData.count += amount;
    await nextTick();
    console.log("nextTick");
  };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  onMounted(() => {
    console.log(`so stuff related to counter`);
  });

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
