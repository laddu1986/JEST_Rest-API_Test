module.exports = {
  rootDir: './',
    transformIgnorePatterns: ['./node_modules/.*'],
  verbose: false,
  reporters: [ "default",
      //"jest-allure",
    //  "jest-allure-reporter",
      [ "./node_modules/jest-junit",
          {
              suiteName: "API Tests" ,
              outputDirectory:'./reports',
          } ],
  ],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/framework.setup.js'],

    globals: {

        shopId: 'hoeffner',
        shopTitle: 'Höffner',
        articlesLessthanThreshold: {
            speditionPolsterShippingFreeTrue:'10357325',
            speditionPolsterShippingFreeFalse:'11350537',
            speditionMoebel:'22400492',
            speditionMatratezn:'854117',
            paketversand:'11532057',
            whiteGoods:'624365',
            bulkyGoods:'10788311',
            speditionPolsterShippingFreeTruePC:'2183963',
            speditionPolsterShippingFreeFalsePC:'2585424',
            speditionMoebelPC:'2502834',
            speditionMatrateznPC:'2482386',
            paketversandPC:'2536925',
            whiteGoodsPC:'2250185',
            bulkyGoodsPC:'10788311',
        },
        articlesGreaterthanThreshold: {
            speditionPolsterShippingFreeTrue:'10357325',
            speditionPolsterShippingFreeFalse:'11350537',
            speditionMoebel:'22400492',
            speditionMatratezn:'854117',
            paketversand:'11532057',
            whiteGoods:'624365',
            bulkyGoods:'10788311',
            speditionPolsterShippingFreeTruePC:'2183963',
            speditionPolsterShippingFreeFalsePC:'2585424',
            speditionMoebelPC:'2502834',
            speditionMatrateznPC:'2482386',
            paketversandPC:'2536925',
            whiteGoodsPC:'2250185',
            bulkyGoodsPC:'10788311',
        },
        user: {

            salutation: 'Herr',
            email: 'bestellungen_test@kos.krieger.de',
            password: '123456qwertz',
            name: 'Test',
            lastName: 'Automation',
            addressStreet: 'am rondell',
            addressNumber: '1',
            addressZipCode: '41460',
            addressCity: 'Berlin',
            fullTelephone: '0231263381',
            telephoneArea: '0176',
            telephone: '1231233',
            birthDay: '01.02.1993',
            generalField: 'This is a general field',
            nearStore: 'HOS',
            data: {
                email: 'asdf@asdf.com',
                password: 'asdfasdf',
            },
        },

    },
};
