import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      { name: "rock", emoji: "🪨", label: "Piedra" },
      { name: "paper", emoji: "📄", label: "Papel" },
      { name: "scissors", emoji: "✂️", label: "Tijera" }
    ];
    const playerChoice = ref(null);
    const computerChoice = ref(null);
    const gameResult = ref("");
    const playerScore = ref(0);
    const computerScore = ref(0);
    const gameInProgress = ref(false);
    const isPlayerAnimating = ref(false);
    const isComputerAnimating = ref(false);
    const isComputerThinking = ref(false);
    const getEmoji = (choice) => {
      const option = options.find((opt) => opt.name === choice);
      return option ? option.emoji : "❓";
    };
    const getResultClass = () => {
      if (gameResult.value.includes("¡Ganaste!")) return "result-win";
      if (gameResult.value.includes("¡Perdiste!")) return "result-lose";
      return "result-tie";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "game-container" }, _attrs))} data-v-e790c11f><div class="game-header" data-v-e790c11f><h1 class="game-title" data-v-e790c11f>🎮 Piedra, Papel o Tijera</h1><div class="score-board" data-v-e790c11f><div class="score-item" data-v-e790c11f><span class="score-label" data-v-e790c11f>Jugador</span><span class="score-value" data-v-e790c11f>${ssrInterpolate(unref(playerScore))}</span></div><div class="score-item" data-v-e790c11f><span class="score-label" data-v-e790c11f>Máquina</span><span class="score-value" data-v-e790c11f>${ssrInterpolate(unref(computerScore))}</span></div></div></div><div class="game-area" data-v-e790c11f><div class="choices-display" data-v-e790c11f><div class="choice-container" data-v-e790c11f><h3 data-v-e790c11f>Tu elección</h3><div class="${ssrRenderClass([{ "animate-bounce": unref(isPlayerAnimating) }, "choice-circle"])}" data-v-e790c11f><span class="choice-emoji" data-v-e790c11f>${ssrInterpolate(unref(playerChoice) ? getEmoji(unref(playerChoice)) : "❓")}</span></div></div><div class="vs-divider" data-v-e790c11f><span data-v-e790c11f>VS</span></div><div class="choice-container" data-v-e790c11f><h3 data-v-e790c11f>Máquina</h3><div class="${ssrRenderClass([{ "animate-spin": unref(isComputerThinking), "animate-bounce": unref(isComputerAnimating) }, "choice-circle"])}" data-v-e790c11f><span class="choice-emoji" data-v-e790c11f>${ssrInterpolate(unref(computerChoice) ? getEmoji(unref(computerChoice)) : "🤖")}</span></div></div></div>`);
      if (unref(gameResult)) {
        _push(`<div class="result-area" data-v-e790c11f><div class="${ssrRenderClass([getResultClass(), "result-message"])}" data-v-e790c11f>${ssrInterpolate(unref(gameResult))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="options-container" data-v-e790c11f><!--[-->`);
      ssrRenderList(options, (option) => {
        _push(`<button${ssrIncludeBooleanAttr(unref(gameInProgress)) ? " disabled" : ""} class="${ssrRenderClass([{ "selected": unref(playerChoice) === option.name }, "option-button"])}" data-v-e790c11f><span class="option-emoji" data-v-e790c11f>${ssrInterpolate(option.emoji)}</span><span class="option-name" data-v-e790c11f>${ssrInterpolate(option.label)}</span></button>`);
      });
      _push(`<!--]--></div><div class="game-controls" data-v-e790c11f>`);
      if (unref(gameResult)) {
        _push(`<button class="reset-button" data-v-e790c11f> 🔄 Jugar de nuevo </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e790c11f"]]);
export {
  index as default
};
//# sourceMappingURL=index-DnPlnjDD.js.map
