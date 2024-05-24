import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        nom_element: "",
        coeff: "",
        codeprof: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('ec.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create New EC
                    </h2>
                </div>
            }
        >
            <Head title="Elements Constitutifs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                        >

                            <div>
                                <InputLabel
                                    htmlFor="nom_element"
                                    value="Nom Element"
                                />
                                <TextInput
                                    id="nom_element"
                                    name="nom_element"
                                    value={data.nom_element}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("nom_element", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.nom_element}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="coeff"
                                    value="Coefficient"
                                />

                                <TextInput
                                    id="coeff"
                                    type="number"
                                    name="coeff"
                                    value={data.coeff}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("coeff", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.coeff}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="codeprof"
                                    value="Code Prof"
                                />

                                <TextInput
                                    id="codeprof"
                                    name="codeprof"
                                    type="number"
                                    value={data.codeprof}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("codeprof", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.codeprof}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 text-right">
                                <Link
                                    href={route("ec.index")}
                                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                    Cancel
                                </Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
