<template>
    <div class="max-w-4xl mx-auto sm:pl-6 sm:pr-6 sm:pt-6 lg:pl-8 lg:pr-8 lg:pt-8">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ $t('language') }}
        </label>
        <select
            name="locales"
            @change="changeLocale($event)"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option
                v-for="locale in locales"
                :key="locale.code"
                :value="locale.code"
                :selected="locale.code === currentLocale"
            >
                {{ locale.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'LocaleSelector',
    computed: {
        currentLocale() {
            return this._i18n.locale;
        },
        locales() {
            return this._i18n.locales;
        }
    },
    methods: {
        changeLocale(event) {
            this._i18n.setLocale(event.target.value);
        },
    },
}
</script>