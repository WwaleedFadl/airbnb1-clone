import getListingById from "@/app/actions/getListingById"

interface IParams {
  listingId?: string;
}

const Listingpage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params)

  return (
    <div>{listing.title}</div>
  )
}

export default Listingpage
