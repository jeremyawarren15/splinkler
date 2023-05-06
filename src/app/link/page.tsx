import LinksTable from "./linksTable";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getLinks() {
  return prisma.link.findMany();
}

export default async function LinkPage() {
  const links = await getLinks();
  return (
    <>
      <LinksTable
        title="Links"
        description="Your links"
        links={links}
      />
    </>
  )
}