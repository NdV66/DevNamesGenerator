import en from './en.json';

const LangController = {
    getDefaultLang: () => en
};

export default LangController;
export const Lang = LangController.getDefaultLang();
