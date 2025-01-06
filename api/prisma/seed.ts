import { prisma } from "@/database/prisma"

async function seed() {
  await prisma.category.createMany({
    data: [
      { id: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d", name: "Food" },
      { id: "abce52cf-b33b-4b3c-8972-eb72c66c83e4", name: "Pubs" },
      { id: "57d6e5ff-35f6-4d21-a521-84f23d511d25", name: "Hotels" },
      { id: "826910d4-187d-4c15-88f4-382b7e056739", name: "Cinema" },
      { id: "52e81585-f71a-44cd-8bd0-49771e45da44", name: "Shopping" },
    ],
  })

  await prisma.market.createMany({
    data: [
      // FOOD
      {
        "id": "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        "categoryId": "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        "name": "Sabor Grill",
        "description": "Steakhouse with premium cuts and a varied buffet. A complete experience for meat lovers.",
        "latitude": 53.34532188535944, 
        "longitude": -6.259140368813006,
        "coupons": 7,
        "address": "O'Connell Street Upper, Dublin",
        "phone": "+353 83 123 4567",
        "cover": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300"
      },
      {
        "id": "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        "categoryId": "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        "name": "Central Café",
        "description": "Cozy café with snacks and artisanal drinks. Perfect for a break.",
        "latitude": 53.3484,
        "longitude": -6.2597,
        "coupons": 3,
        "address": "Henry Street, Dublin",
        "phone": "+353 85 987 6543",
        "cover": "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300"
      },
      {
        "id": "4197b830-aa9c-40d4-a22e-c05043588a77",
        "categoryId": "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        "name": "Burger Up",
        "description": "Gourmet burgers made fresh. Fresh ingredients and unique combinations.",
        "latitude": 53.3475,
        "longitude": -6.2622,
        "coupons": 5,
        "address": "Dame Street, Dublin",
        "phone": "+353 86 234 5678",
        "cover": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300"
      },
      {
        "id": "4209c72f-9d14-410c-91af-c24d08f177cc",
        "categoryId": "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        "name": "Sweet & Delight",
        "description": "Bakery with incredible sweets and desserts. Showpiece cakes and artisanal specialties.",
        "latitude": 53.3464,
        "longitude": -6.2572,
        "coupons": 10,
        "address": "Grafton Street, Dublin",
        "phone": "+353 89 765 4321",
        "cover": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300"
      },
      {
        "id": "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        "categoryId": "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        "name": "Green Life",
        "description": "Vegan restaurant with healthy and tasty dishes. Natural food in a cozy environment.",
        "latitude": 53.3470,
        "longitude": -6.2590,
        "coupons": 2,
        "address": "Parnell Street, Dublin",
        "phone": "+353 87 654 3210",
        "cover": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300"
      },
      // PUBS
      {
        "id": "def71683-e89f-4c3b-a652-868a02f54ae9",
        "categoryId": "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        "name": "Golden Grain",
        "description": "Famous for its croissants and naturally fermented bread.",
        "latitude": 53.3478,
        "longitude": -6.2597,
        "coupons": 6,
        "address": "O'Connell Street, Dublin",
        "phone": "+353 86 234 5678",
        "cover": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300"
      },
      {
        "id": "e4949574-a579-4b07-a005-3fc4b7339752",
        "categoryId": "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        "name": "Bread & Co.",
        "description": "Artisanal bakery with fresh bread and homemade treats every day.",
        "latitude": 53.3464,
        "longitude": -6.2575,
        "coupons": 9,
        "address": "Dame Street, Dublin",
        "phone": "+353 85 987 6543",
        "cover": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300"
      },
      {
        "id": "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        "categoryId": "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        "name": "Sweet Dough",
        "description": "Specialized in sweets and savory pastries, with complete breakfast options.",
        "latitude": 53.3452,
        "longitude": -6.2621,
        "coupons": 4,
        "address": "Henry Street, Dublin",
        "phone": "+353 87 765 4321",
        "cover": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300"
      },
      {
        "id": "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        "categoryId": "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        "name": "City Bakery",
        "description": "Neighborhood bakery with rustic and traditional bread baked fresh.",
        "latitude": 53.3481,
        "longitude": -6.2559,
        "coupons": 8,
        "address": "Grafton Street, Dublin",
        "phone": "+353 83 123 4567",
        "cover": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300"
      },
      // HOTEL
      {
        "id": "7be85f5b-533f-4974-8c9e-75cae740041c",
        "categoryId": "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        "name": "Blue Sky Hotel",
        "description": "Modern hotel with cozy rooms. Perfect for relaxing stays.",
        "latitude": 53.33925221285418, 
        "longitude": -6.261337967022297,
        "coupons": 8,
        "address": "33 St Stephen's Green, Dublin",
        "phone": "+353 89 345 6789",
        "cover": "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=400&h=300"
      },
      {
        "id": "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        "categoryId": "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        "name": "Serena House",
        "description": "Charming guesthouse in the heart of the city, with a tranquil atmosphere and personalized service.",
        "latitude": 53.33956189188123, 
        "longitude": -6.2587446598116205,
        "coupons": 7,
        "address": "45 Grafton Street, Dublin",
        "phone": "+353 87 456 7890",
        "cover": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300"
      },
      {
        "id": "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        "categoryId": "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        "name": "Urban Suites",
        "description": "Sophisticated accommodations near the city center. Perfect for business or leisure travelers.",
        "latitude": 53.3407208222124, 
        "longitude": -6.260756437522265,
        "coupons": 6,
        "address": "19 Dawson Street, Dublin",
        "phone": "+353 86 234 5678",
        "cover": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300"
      },
      {
        "id": "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        "categoryId": "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        "name": "Villa Charm",
        "description": "Rustic chalets in a peaceful area. Offers an exclusive and private lodging experience.",
        "latitude": 53.34028446752489, 
        "longitude": -6.258556055654743,
        "coupons": 9,
        "address": "12 St Stephen's Green, Dublin",
        "phone": "+353 85 345 6789",
        "cover": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300"
      },
      {
        "id": "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        "categoryId": "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        "name": "Royal Inn",
        "description": "Boutique hotel with classic design and excellent service. A luxurious and comfortable stay.",
        "latitude": 53.3426495617338, 
        "longitude": -6.259583813499032,
        "coupons": 10,
        "address": "5 Kildare Street, Dublin",
        "phone": "+353 83 456 7890",
        "cover": "https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=400&h=300"
      },
      // CINEMA
      {
        "id": "bde73364-95c5-46e4-8084-79a7ca3824c4",
        "categoryId": "826910d4-187d-4c15-88f4-382b7e056739",
        "name": "CineStar",
        "description": "Modern cinema with comfortable seating and cutting-edge technology.",
        "latitude": 53.3468,
        "longitude": -6.2595,
        "coupons": 7,
        "address": "O'Connell Street, Dublin",
        "phone": "+353 89 345 6789",
        "cover": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300"
      },
      {
        "id": "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        "categoryId": "826910d4-187d-4c15-88f4-382b7e056739",
        "name": "MovieLand",
        "description": "Cultural space with a wide selection of films and exclusive festivals.",
        "latitude": 53.3459,
        "longitude": -6.2603,
        "coupons": 9,
        "address": "Dame Street, Dublin",
        "phone": "+353 83 234 5678",
        "cover": "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=400&h=300"
      },
      {
        "id": "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        "categoryId": "826910d4-187d-4c15-88f4-382b7e056739",
        "name": "TelaMax",
        "description": "Neighborhood cinema with a cozy atmosphere, featuring classic and new releases.",
        "latitude": 53.3480,
        "longitude": -6.2567,
        "coupons": 5,
        "address": "Grafton Street, Dublin",
        "phone": "+353 87 456 7890",
        "cover": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300"
      },
      // SHOPPING
      {
        id: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Loja Nova",
        description:
          "Roupas e acessórios modernos para o dia a dia. Estilo casual com ótimos preços.",
        latitude: -23.564580184943406,
        longitude: -46.66202724389377,
        coupons: 10,
        address: "Rua José Maria Lisboa - Jardim Paulista",
        phone: "(16) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=300",
      },
      {
        id: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Tech Plus",
        description:
          "Loja de eletrônicos com produtos de última geração. Gadgets e acessórios para todos.",
        latitude: -23.56183474903135,
        longitude: -46.66355095952655,
        coupons: 10,
        address: "Alameda Franca - Cerqueira César",
        phone: "(17) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300",
      },
      {
        id: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Casa Luxo",
        description:
          "Decoração sofisticada para casa e escritório. Produtos exclusivos para ambientes elegantes.",
        latitude: -23.55870738391179,
        longitude: -46.66172705741049,
        coupons: 10,
        address: "Alameda Santos - Jardim Paulista",
        phone: "(18) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300",
      },
      {
        id: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "BookMart",
        description:
          "Livraria especializada em best-sellers e clássicos. Espaço aconchegante para leitura.",
        latitude: -23.556376883488902,
        longitude: -46.65941413229616,
        coupons: 10,
        address: "Rua Luís Coelho - Consolação",
        phone: "(19) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=300",
      },
      {
        id: "78ced7b1-436b-42ca-9c66-747f2b671321",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Green Market",
        description:
          "Produtos orgânicos e saudáveis para o seu dia a dia. Alimentos frescos e sustentáveis.",
        latitude: -23.55473446617852,
        longitude: -46.65859874077045,
        coupons: 10,
        address: "Rua Matias Aires - Consolação",
        phone: "(11) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400&h=300",
      },
    ],
  })

  await prisma.rules.createMany({
    data: [
      {
        marketId: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        description: "Valid until: 31/12/2024",
      },
      {
        marketId: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        description: "Valid until: 15/01/2025",
      },
      {
        marketId: "4197b830-aa9c-40d4-a22e-c05043588a77",
        description: "Valid until: 20/01/2025",
      },
      {
        marketId: "4209c72f-9d14-410c-91af-c24d08f177cc",
        description: "Valid until: 31/12/2024",
      },
      {
        marketId: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        description: "Valid until: 15/01/2025",
      },
      {
        marketId: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        description: "Valid until: 20/01/2025",
      },
      {
        marketId: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        description: "Valid until: 31/12/2024",
      },
      {
        marketId: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        description: "Valid until: 10/01/2025",
      },
      {
        marketId: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        description: "Valid until: 31/12/2024",
      },
      {
        marketId: "78ced7b1-436b-42ca-9c66-747f2b671321",
        description: "Valid until: 31/12/2024",
      },
      {
        marketId: "7be85f5b-533f-4974-8c9e-75cae740041c",
        description: "Valid until: 15/01/2025",
      },
      {
        marketId: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        description: "Valid until: 20/01/2025",
      },
      {
        marketId: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        description: "Valid until: 07/01/2025",
      },
      {
        marketId: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        description: "Valid until: 31/12/2024",
      },
      {
        marketId: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        description: "Valid until: 31/12/2024",
      },
      {
        marketId: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        description: "Valid until: 31/12/2024",
      },
      {
        marketId: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        description: "Valid until: 15/01/2025",
      },
      {
        marketId: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        description: "Valid until: 20/01/2025",
      },
      {
        marketId: "def71683-e89f-4c3b-a652-868a02f54ae9",
        description: "Valid until: 31/12/2024",
      },
      {
        marketId: "e4949574-a579-4b07-a005-3fc4b7339752",
        description: "Valid until: 15/01/2025",
      },
      {
        marketId: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        description: "Valid until: 25/02/2025",
      },
      {
        marketId: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        description: "Valid until: 01/02/2025",
      },
      {
        marketId: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "4197b830-aa9c-40d4-a22e-c05043588a77",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "4209c72f-9d14-410c-91af-c24d08f177cc",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "78ced7b1-436b-42ca-9c66-747f2b671321",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "7be85f5b-533f-4974-8c9e-75cae740041c",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "def71683-e89f-4c3b-a652-868a02f54ae9",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "e4949574-a579-4b07-a005-3fc4b7339752",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        description: "Valid for on-site consumption only",
      },
      {
        marketId: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        description: "Valid for on-site consumption only",
      },
    ],
  })
}

seed().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect()
})
