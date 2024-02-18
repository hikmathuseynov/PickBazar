'use client'
import { useRouter } from "next/navigation";
import '@/styles/navbar.scss'
import { PickBazar } from "@/constants/logo";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSelectedCategory } from "@/lib/features/app.slice";

const Navbar = ({ categories }: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(state => state.app.selectedCategory);
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    dispatch(setSelectedCategory(categories[0]))
  }, [])

  return (
    <div className="navbar">
      <div className="left">
        <img src={PickBazar} className='login_logo' alt="pickbazar logo" />
        <div className="category_dropdown"
          onClick={toggle}
        >
          <span className="category">{selectedCategory?.title}</span>
          <IoIosArrowDown />

          {isOpen && <ul className="dropdown_list">
            {categories?.map((category: any) => (
              <li key={category.id}
                onClick={() => {
                  dispatch(setSelectedCategory(category))
                }}
              >{category.title}</li>
            ))}
          </ul>}
        </div>

      </div>
      <button
        className="join"
        onClick={() => router.push('/login')}
      >
        Log in
      </button>
    </div>
  )
}

export default Navbar