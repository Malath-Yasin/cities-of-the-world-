const citiesData=[

        {
            id: 1,
            name: "Paris",
            country: "France",
            info: "City of lights and romance",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fparis&psig=AOvVaw2QPTr2SUFWIVSG7NM2p4uM&ust=1698180263388000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOD-7MyEjYIDFQAAAAAdAAAAABAI",
          },
 

        {
          id: 2,
          name: "Rome",
          country: "Italy",
          info: "Eternal city with ancient ruins",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frome&psig=AOvVaw2yJwm3ZnFPgdaUTTYA4grK&ust=1698180293452000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDBmtuEjYIDFQAAAAAdAAAAABAE",
        },
        {
          id: 3,
          name: "London",
          country: "United Kingdom",
          info: "Royal city with iconic landmarks",
          image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F427679%2Fpexels-photo-427679.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-chris-schippers-427679.jpg%26fm%3Djpg&tbnid=gCSwVSXAWtlOaM&vet=12ahUKEwjwicvohI2CAxXDXaQEHTQbBz4QMygBegQIARBR..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flondon%2F&docid=9f3XtcUguxZdfM&w=5346&h=3564&q=img%20for%20London&ved=2ahUKEwjwicvohI2CAxXDXaQEHTQbBz4QMygBegQIARBR",
        },
        {
          id: 4,
          name: "New York City",
          country: "United States",
          info: "Dynamic metropolis with global influence",
          image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F7a%2FView_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%2528cropped%2529.jpg%2F800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%2528cropped%2529.jpg&tbnid=FgXyeFXocc7BWM&vet=12ahUKEwiTkJv6hI2CAxWHoicCHQSAAT8QMygAegQIARBx..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNew_York_City&docid=CNXi28oHbZhMkM&w=800&h=436&q=img%20forNew%20York%20City&ved=2ahUKEwiTkJv6hI2CAxWHoicCHQSAAT8QMygAegQIARBx",
        },
        {
          id: 5,
          name: "Tokyo",
          country: "Japan",
          info: "Thriving hub of technology and culture",
          image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fhigh-angle-view-of-tokyo-skyline-at-dusk-japan-royalty-free-image-1664309926.jpg&tbnid=9tqnSGx6o_-fFM&vet=12ahUKEwj4sM2HhY2CAxUCmScCHee8CTgQMygAegQIARBI..i&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Fuk%2Flifestyle%2Ftravel%2Fg41225336%2Fpictures-of-tokyo%2F&docid=yMqvYlvAg0y-JM&w=2121&h=1414&q=img%20for%20Tokyo&ved=2ahUKEwj4sM2HhY2CAxUCmScCHee8CTgQMygAegQIARBI",
        },
        {
          id: 6,
          name: "Sydney",
          country: "Australia",
          info: "Coastal city with iconic Opera House",
          image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F06%2F06%2F09%2F36%2Fsydney-opera-house-363244_1280.jpg&tbnid=SXzpv9cjD5B5cM&vet=12ahUKEwjy_LyjhY2CAxXMdaQEHe57Ax8QMygCegQIARBM..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fsydney%2F&docid=ASIExu9P2twxdM&w=1280&h=854&q=img%20for%20sydne&ved=2ahUKEwjy_LyjhY2CAxXMdaQEHe57Ax8QMygCegQIARBM",
        },
        {
          id: 7,
          name: "Rio de Janeiro",
          country: "Brazil",
          info: "Lively city with vibrant carnival",
          image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1483729558449-99ef09a8c325%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww&tbnid=llInbh23Ha-wJM&vet=12ahUKEwjTpsS5hY2CAxUVkicCHWJHAzoQMygAegQIARBQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frio-de-janeiro&docid=E74RWvMmMnnCuM&w=1000&h=667&q=img%20for%20Rio%20de%20Janeiro&ved=2ahUKEwjTpsS5hY2CAxUVkicCHWJHAzoQMygAegQIARBQ"
        },
        {
            id: 8,
            name: "Berlin",
            country: "Germany",
            info: "Capital of Germany",
            image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F503874284%2Fphoto%2Fberlin-skyline-with-spree-river-at-sunset-germany.jpg%3Fb%3D1%26s%3D612x612%26w%3D0%26k%3D20%26c%3DaZROUv38EZoCoCfTgNCgTL4f6FpdYlnswvgUJ_B_p9A%3D&tbnid=TQnp8u649Vm-GM&vet=12ahUKEwizqObHhY2CAxWbmycCHeegCDUQMygBegQIARBJ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fberlin%2F&docid=aaUJPSltURIZ5M&w=612&h=397&q=img%20for%20Berlin&ved=2ahUKEwizqObHhY2CAxWbmycCHeegCDUQMygBegQIARBJ",
        },
        {
            id: 9,
            name: "Dubai",
            country: "United Arab Emirates",
            info: "City of the future",
            image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.tacdn.com%2Fmedia%2Fattractions-splice-spp-674x446%2F09%2Fc3%2F33%2F97.jpg&tbnid=vMuFKxWLflBTOM&vet=12ahUKEwjip4_RhY2CAxVTa6QEHds3BRYQMygDegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.viator.com%2Ftours%2FDubai%2FIMG-World-Of-Adventure%2Fd828-175737P3&docid=lBXYVEZPghGJHM&w=670&h=446&q=img%20for%20Dubai&ved=2ahUKEwjip4_RhY2CAxVTa6QEHds3BRYQMygDegQIARB0",
        },
        {
            id: 10,
            name: "Singapore",
            country: "Singapore",
            info: "Garden City",
            image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.passporthealthusa.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fvaccines-advice-singapore-img-compressed.jpg%3Fx47081&tbnid=tXJ1OztVdQiPFM&vet=12ahUKEwiftuDjhY2CAxVPrycCHVTQBSoQMygEegQIARBU..i&imgrefurl=https%3A%2F%2Fwww.passporthealthusa.com%2Fdestination-advice%2Fsingapore%2F&docid=3WN-sKDdwaHDrM&w=1000&h=389&q=img%20for%20Singapore&ved=2ahUKEwiftuDjhY2CAxVPrycCHVTQBSoQMygEegQIARBU",
        },
]

export default citiesData;