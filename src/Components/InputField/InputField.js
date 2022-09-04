import React from 'react'

const InputField = ({ type, onchange, value, label }) => {
    return (
        <>
            {(type != 'select' && type != 'textarea') &&
                <input
                    type={type}
                    onChange={onchange}
                    value={value}
                    placeholder={label}
                    className={' font-medium custom-input w-60 rounded-full py-1 px-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'} />

            }

            {type == 'select' &&
                <select

                    onChange={onchange}
                    value={value}
                    className={' font-medium custom-input w-60 rounded-full py-1 px-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'}>
                    <option value="">abc</option>
                    <option value="">abc</option>
                    <option value="">abc</option>
                    <option value="">abc</option>
                </select>
            }
            {type == 'textarea' &&
                <textarea
                    rows={5}
                    onChange={onchange}
                    value={value}
                    placeholder={label}
                    className={' font-medium custom-input w-60 rounded-full py-1 px-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'} />

            }
        </>
    )
}

export default InputField