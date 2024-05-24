import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head , Link, router} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";


const deleteEc = (ec) => {
  if (!window.confirm("Are you sure you want to delete the ec?")) {
    return;
  }
  router.delete(route("ec.destroy", ec.code_element));
};

export default function Index({ auth, ecs }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
              Elements Constitutifs
            </h2>
            <Link
              href={route("ec.create")}
              className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
            >
              Add new
            </Link>
          </div>
        }
            
        >
            <Head title="Ec" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div className="overflow-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
      <tr className="text-nowrap">
        <th className="px-3 py-3">ID</th>
        <th className="px-3 py-3">Nom Element</th>
        <th className="px-3 py-3">Coefficient</th>
        <th className="px-3 py-3">Code Prof</th>

        <th className="px-3 py-3 text-right">Actions</th>
      </tr>
    </thead>
    <tbody>
      {ecs.data.map((ec) => (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={ec.code_element}>
          <td className="px-3 py-2">{ec.code_element}</td>
          <td className="px-3 py-2 text-gray-100 text-nowrap hover:underline">
            {ec.nom_element}
          </td>
          <td className="px-3 py-2">
          {ec.coeff}

          </td>
          <td className="px-3 py-2 text-nowrap">{ec.codeprof}</td>
          
          <td className="px-3 py-2 text-right">
            <Link href={route("ec.edit", ec.code_element)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
              Edit
            </Link>
            <button onClick={(e) => deleteEc(ec)} className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<Pagination links={ecs.meta.links} />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
