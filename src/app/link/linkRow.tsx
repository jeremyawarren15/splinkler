import StatusBadge from "@/components/statusBadge"
import useDate from "@hooks/useDate"
import useRelativeDate from "@hooks/useRelativeDate"

type Props = {
  name: string,
  link: string,
  destination: string,
  status: string,
  created: Date,
  expires?: Date,
}

export default function LinkRow({name, link, destination, status, created, expires}: Props) {
  return (
    <tr>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">{name}</span>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <div className="flex items-center gap-x-2">
            <div className="grow">
              <span className="text-sm text-gray-600 dark:text-gray-400">{link}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <div className="flex items-center gap-x-2">
            <div className="grow">
              <span className="text-sm text-gray-600 dark:text-gray-400">{destination}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <StatusBadge />
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">{useDate(created)}</span>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">{useRelativeDate(expires)}</span>
        </div>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-1.5">
          <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
            <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
              </svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-1">
              <div className="py-2 first:pt-0 last:pb-0">
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  Rename
                </a>
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  Regenrate Key
                </a>
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  Disable
                </a>
              </div>
              <div className="py-2 first:pt-0 last:pb-0">
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700" href="#">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
}