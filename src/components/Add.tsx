import { motion, AnimatePresence } from 'framer-motion';
import { CSSProperties, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { countries } from '../lib/countries';
import Select from "react-select";
import Yumazoo from '../lib/yumazoo';
import { toast } from 'react-hot-toast';

interface AddProps {
    show: boolean;
    setShow: (show: boolean) => void;
    updateRecipes: () => void;
}

interface FormData {
    name: string;
    origin: {
        label: string;
        value: string;
    };
    description: string;
    difficulty: {
        label: string;
        value: number;
    };
    produce: string;
    protein: string;
    serves: number;
    spice: number;
    cookingOil: string;
    stock: string;
    volume: number;
    authenticity: {
        label: string;
        value: string;
    };
}

const Add: React.FC<AddProps> = ({ show, setShow, updateRecipes }) => {

    const { register, handleSubmit, reset, control, formState: { errors } } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data: FormData) => {

        const transformedData = {
            ...data,
            difficulty: data.difficulty?.value || 1,
            volume: data.volume || 0,
            serves: data.serves || 0,
            origin: data.origin?.value,
            authenticity: data.authenticity?.value
        }
        
        setIsSubmitting(true);

        try {
            await Yumazoo.postRecipe(transformedData);
            setShow(false);
            updateRecipes();
            reset();            
            toast.success('Recipe added successfully!');
        } catch (error) {
            toast.error('Something went wrong! Try again later.');
        }

        setIsSubmitting(false);

    };

      const styling: any = {
        control: (provided: CSSProperties) => ({
          ...provided,
          border: 0,
          borderRadius: '0.375rem',
          backgroundColor: 'rgb(69,74,95,0.2)',
          color: '#fff',
          fontSize: '0.875rem',
        }),
        menu: (provided: CSSProperties) => ({
          ...provided,
          backgroundColor: '#0D1119',
          color: '#fff',
        }),
        option: (provided: CSSProperties, state: any) => {
          return {
            ...provided,
            fontWeight: 500,
            backgroundColor: state.isSelected ? 'white' : '#0D1119',
            color: state.isSelected ? '#0D1119' : 'white',
            cursor: state.isDisabled ? 'not-allowed' : 'default',
            '&:hover': {
              backgroundColor: '#6e84dd',
              color: '#fff',
            },
          };
        },
        placeholder: (provided: CSSProperties) => ({
          ...provided,
          color: '#454A5F',
        }),
        singleValue: (provided: CSSProperties) => ({
          ...provided,
          color: '#fff',
        }),
      };
      

    const difficultyOptions = [
        { value: 1, label: 'Easy' },
        { value: 2, label: 'Medium' },
        { value: 3, label: 'Hard' }
    ];

    const transformedCountries = countries.map(country => ({
        value: country.code.toLowerCase(), // lower case code
        label: country.name, // country name
    }));      

    const [descriptionLength, setDescriptionLength] = useState(0);
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const descriptionValue = event.target.value;
        if (descriptionValue.length <= 200) {
            setDescriptionLength(descriptionValue.length);
        } else {
            event.target.value = descriptionValue.substring(0, 200);
            setDescriptionLength(200);
        }
    };    

    return (
        <AnimatePresence>
            {show && (
            <motion.div layoutId="add" className={`absolute overflow-scroll bg-primary p-6 top-0 left-0 w-full h-full`} initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.4 } }} exit={{ opacity: 0, x: -300, transition: { ease: 'easeOut', duration: 0.4 } }}>
                
                <div className="py-4 flex items-center font-bold gap-x-6 px-3 border-b border-[#2E3347] mb-4">
                    <button onClick={() => setShow(false)}>
                        <i className="fas fa-chevron-left text-[#6B7280]"></i>
                    </button>
                    Add new recipe
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="flex gap-x-3">
                        <div className="field">
                            <label htmlFor="">Name</label>
                            <input className={errors.name && '!border-red-500'} {...register("name", { required: true })} />
                        </div>
                        <div className="field">
                            <label htmlFor="">Origin</label>
                            <div className={`border rounded-md border-[#454a5f] ${errors.origin && '!border-red-500'} `}>
                            <Controller 
                                control={control}
                                name="origin"
                                render={({ field }) => (
                                <Select 
                                    {...field}
                                    className={errors.difficulty && '!border-red-500'}
                                    placeholder="Select"
                                    options={transformedCountries}
                                    styles={styling}
                                />
                            )}
                            />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="field">
                            <label htmlFor="">Description</label>
                            <textarea placeholder="Describe your recipe..." className={errors.description && '!border-red-500'} {...register("description", { required: false })} onChange={handleDescriptionChange} />
                            <p className='font-light text-[#43495E] text-sm'>{descriptionLength}/200 Characters</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-x-3">
                        <div className="field">
                            <label htmlFor="">Difficulty</label>
                            <div className={`border rounded-md border-[#454a5f] ${errors.difficulty && '!border-red-500'} `}>
                            <Controller 
                                control={control}
                                name="difficulty"
                                render={({ field }) => (
                                <Select 
                                    {...field}
                                    className={errors.difficulty && '!border-red-500'}
                                    placeholder="Select"
                                    options={difficultyOptions}
                                    styles={styling}
                                />
                            )}
                            />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="">Protein</label>
                            <input className={errors.protein && '!border-red-500'} {...register("protein", { required: false })} />
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className="field">
                            <label htmlFor="">Produce</label>
                            <input className={errors.produce && '!border-red-500'} {...register("produce", { required: false })} />
                        </div>
                        <div className="field">
                            <label htmlFor="">Spice</label>
                            <input className={errors.spice && '!border-red-500'} {...register("spice", { required: false })} />
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className="field">
                            <label htmlFor="">Cooking Oil?</label>
                            <input className={errors.cookingOil && '!border-red-500'} {...register("cookingOil", { required: false })} />
                        </div>
                        <div className="field" data-append="grams">
                            <label htmlFor="">Volume</label>
                            <input type="number" className={errors.volume && '!border-red-500'} {...register("volume", { required: false })} />
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className="field" data-append="people">
                            <label htmlFor="">Serves</label>
                            <input type="number" className={errors.serves && '!border-red-500'} {...register("serves", { required: false })} />
                        </div>
                        <div className="field">
                            <label htmlFor="">Authenticy</label>
                            <div className={`border rounded-md border-[#454a5f] ${errors.authenticity && '!border-red-500'} `}>
                            <Controller 
                                control={control}
                                name="authenticity"
                                rules={{ required: true }}
                                render={({ field }) => (
                                <Select 
                                    {...field}
                                    className={errors.authenticity && '!border-red-500'}
                                    placeholder="Select"
                                    options={[
                                        { value: 'verified', label: 'Verified' },
                                        { value: 'unverified', label: 'Unverified' }
                                    ]}
                                    styles={styling}
                                />
                            )}
                            />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className="field">
                            <label htmlFor="">Stock</label>
                            <input className={errors.stock && '!border-red-500'} {...register("stock", { required: false })} />
                        </div>
                    </div>
                    
                    {isSubmitting && <p className="bg-purple text-white flex justify-center rounded-md w-full py-2 mt-3">
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                    </p>}
                    {!isSubmitting && <button  className="bg-purple hover:text-purple duration-300 hover:scale-105 hover:bg-white rounded-md w-full py-2 mt-3" type="submit">Add recipe</button>}

                </form>

            </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Add;