import React from 'react';
import trust from '../../../../src/assets/trusted/bsti.png';
import trust1 from '../../../../src/assets/trusted/indianwho.png';
import trust2 from '../../../../src/assets/trusted/pakistanwho.png';
import trust3 from '../../../../src/assets/trusted/russwho.png';
import trust4 from '../../../../src/assets/trusted/usaid.png';
import trust5 from '../../../../src/assets/trusted/WHO.png';

const Trusted = () => { 
    const trustedProve = [trust1, trust2, trust4,trust, trust3, trust5, ]

    return (
            <div className='py-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3 gap-5 justify-items-center'>
                {
                    trustedProve?.map((trust, i) =>
                        <img key={i} className='w-16 rounded-xl mt-3' src={trust} alt="" />
                    )
                }
        </div>
    );
};

export default Trusted;