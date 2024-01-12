import api from "@/api";
import RestaurantCard from "@/components/RestaurantCard";
import { redirect } from "next/navigation";

export default async function  Home({searchParams}:{searchParams:{q?: string | undefined}}){

  const query = searchParams.q ?? '';
    // Llamar a la API para obtener la lista de restaurantes
  const restaurants = await api.search(query);
  // const restaurants = await api.search(searchParams.q);

  async function searchAction(formData: FormData) {
    'use server'

    redirect(`/?q=${formData.get('query')}`);
  }

  const searchComponent = restaurants.map((restaurant)=> {
    return(
     <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
    )
  })

  return(
    <section>
      <form action={searchAction} className="inline-flex gap-2 mb-4">
          <input defaultValue={searchParams.q || ''} className="px-2" name="query" />
          <button type="submit" className="p-2 bg-white/20">Search</button>
        </form>
      <section  className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {
        restaurants.length == 0 ? "No hay resultado" : searchComponent
      }
      </section>
    </section>
  )
}
