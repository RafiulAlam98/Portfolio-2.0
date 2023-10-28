import { Link } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
const blogs = [
  {
    id: 1,
    title: "React UseEffect Hook",
    blogimg:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAA/1BMVEXt9v8yV///Mnfv+P/y+//s/P/0/f/t+f8rUv/s+//s///3//89XoD3favx+f8jTv+js//4eKgaSP8zV3seS//p8/9EZIWesP9wiP8mT//W4f//KnM0Wf/Azv/3eamWqf9Qbv+ru//I1f/u6PWmtsiCmP9kfv7/G22El6/O2ebc5/8rUXezw//yvtfx0+WQo7hshJ6Nof8QRP9DZP/xy+D3g6/w3Oz2k7rzsM3v5PL0pcbd6PP1nsH2kLfyvdb8WY76cZ7V4O3+RYK+zP93jv9HZ/9eef//AGa0wtJXc5H9TYf8YJNZdf/Z5f9/lP8APf8URG5he5evvc+brcAANv+JWSGvAAAUdElEQVR4nO1dCVviStMNJOlsECQkKKCoMIpsLmwioKOOCzrb6/j9/9/yVW8hBFAi6lXJuc9zhQ5pOofqqlPVSY8ghCCQW+14PNk+K/raO918Ph4fFLX/ZFQfHErxOBlPnrYUZeKIJpwBb8mzkLcJaB1gJt7SJkijR50ecDoQph9dXsgtTIszmxa5E4/n28WQNy80zFpdfuojinCcj4e8eaHsA2v7T7IG0Howj0PeXCjFPLD2vMOXu8l4+x3G80mgncaTredsDUMGexvM88FlgFZP5nvzkaEcgwsMdQiBE2TqgX4L3RuG3APHNi8TOHiE0xSjmIwfz0+EPIgnO6G5EWMLwgOwfBp6t4DGhlVIaG4QRrv5gCwUQ+8m4NB4GowEPKv9taVlg9LK51vBppzSSebPlnyW4sAY9BylHdRAvx7y8TkThBG07rLPUmU/n59b6o5OSgad2F8MWi/4HIVsLJ/vLrV0AzcFom1y+eBpaKfBpN6XQxEHRa3+bIVyHBBH4stMG8gP0LrFZLIXaM4p3Xz+rYb0GQAxMR+sAkKg1PNLHUrl43hbD5qUUiM9eaMhfQrE4z09eCUIZEuy80Yj+gyAiFB/QWa+5LTh7HIfjO0koABZdtogj68ng2dXy07bWT7efkF+ueQhAfRHPJ7vBlauQHfSeYsBfQ5ARgq0BT9vybMEkG3x/AvuWoNMdpnL4vJp/CX3dCgny13elSEevKBwhnOroJrlK0FuJ1+y5AlG2l4C1hRFmX5vqdLpviQjh7xiCaqUzsl+vTe9xBG0PklPOgu6svoJoezflkql28HrmQfE0faXNzalWIpGo7nXW6HDCzD1r25scJmEtnP9tfoDsZdfghRBi2Lavr8WbSDaguf+nxD69xzwdjntShVNm/H4xmzgEvonFG2Bg59+jmnLTcwrRXda3V63VdSD3m+0wGKf5MIUX9xJUMi6LhSD/tTyKaatRAWaosnQCe5B7pyXKL63AsRFbaG728QDjm/DPjJf2s2zAKEqu4N0zr9Hc6XLgF5K6+GYUKLCrd4dtH9GIaHUuyXMJvF7twF+CSe5yG0zYizlono3RG9kccVOq3vsZo1KaaaX8gHyApcJrUtow73o7dtSLleCqKrVbwljOeixdDY/D/gmwsD3jIxgpmOcuFgsVt1bzN5EcSrtWhcr1ZJbo9Euo1O9lA+y7Oy3WkVupkqL0AbpkLJfIuZFuiIOL34KM7UdwHyd/EL3aAFtqYMyYPjtEIirPqKX9yWIFxcX09rpBY+Uqv6Teqknf23Z6d0Tl3V5WiQnKh3SC5Cv35PzwZUpJ6StqMt6MUgyLy9mbIS2b8g0Tck0+mB5VWeBaSqmqv8rTzmfXbCrVGlMLHnGrekyQPdcuH6W404rV+qSMx3SS1uWe/SFLjC7yzm6rChBjKe4kGdjtLGZKZWrsdRQenlnYjpWnUabQPOie04bi4luZgOGdR4Fszo/Ezhx+nEpOsLtMT5VZuTT3i7x2dTaotFk7+xEDvBMQuDbHnzw0iYgePP4FrTJ9OJc39bjXgpDUY5vqWHlStEzSq1M3D94emZxt/j5KPmSkv/TY6vyfY59sJQbzCsFcYKw2A1aY7QZ2NEx2kQJGfCf5GHBxE1oXKWIbpsoSUB79QKBAvR/izweA7QzYi905Erx3mNYJWJX1DyjpftedxClxCncJV7W6cmUX5ilOffcyzlTzMUfgPHSJjop940kDA/vYunDfyLnwETlg7t0+m6vPFIpIrp4fIC2A2hzHh+/Ydq/PT4O/byNxwBF3mdeiry9pNedo39KeNlOHhBzbOuyJgskpyqdaYIcdxmCKMAuW+t8B0NjXZzPZUJKZ+EHEghtxMBEE+2lwFoIJ2jIZUm6TGOrVL6rEpmSqh4KjDdT2Kti3QJtD32nSjQM1n97/nDMY4BOlP3JPpmCuZ/YYPRTaliX5z+p3WBySajMUT2sFKnEkAX5mE5I8r97lwT5pD44v6S9zGVu8unCD/dh2v4ZOLUSyg/AySG5YnQAwSF2eHAI/6+Wse2Y5f8BI3eHh2n8ITqRxT5+k7p7iOE/F9VqlTBYnaSNxoDc6aB9fh/FooIYB6aFVtGiuZau68XvOa5TCK2sPqEnMYf3MtO7uTY94yePHhoEUV33phBPQ2klX7ASPUFbLH0HSGO7Sd0R/SENq6DgRPBZAhhgirShw+pBH7uxITBJZqEo3sHLA8cwzGGs+s/s90HBpIbwp+8PCzQGYC2fG80z4q9YdKhjw1IE2qxT11ZiC59Ub8CHlTpNE2iQLZ3z6AE5PJgcOTaPx1Lai9fZMG0cMLvI9BMF0G//DPLSOGTBVRSGpEUwHsEOsTlJ8IJ9TLqAqSyKJo6k0pRUgcYAP3BWzvyV7iEIZqnjjbRyL8doIy6x1KNTPlo6xWdprdvc8X6nRT3gHFes1fMvWYmepA3PKzC1u3996uzNf6nYg8GOg5ZLM98nkOxJ6kMLps2EMw/Zx2jgmClAeDbE3DmzOWwbJFhwIUxlMcw0nTp42kpYwuVJlhKcyhpVHaWBTj0fqA/iF0vzSFhIqxZf5aO+DRkHMBn7LAAisLAhno8YBsxXOukgZiCn378oA8X4LRBK/Z6L2bQxVUqSpej9eZvaRmsmbSyEYBbkjpuZ0bJ4UlYcGhdw9nA/mvWl73PQgZXu4o9wsEiK52XsgXlykG+xh0OOGKMCOd+AzhQxzBicIA1T5K8HM2mjPj4a7Z7tnwjYgQ98ooLSplHndaJQL0YDRSvKLVPQScjAdtdhP0NL70ax/MhhvXs6j2NbWOkScN0m/asyT4+LSTFPOQmYwjaFHunrEW3fUrG0MdbZbNp0qhp0jQp5VgPqaW5IIFdC5R2OFDIVc6XLn1RZUEVGU3jMsVwvEaZuW7rQav+8vLxPQmSY43rxlhevUAp35S66i3HjQfDqcM8DoALtgSRJP5Yv+k6fWpkEHjA2rmufoO3eU5kVWEzEE4/ZTa4Dubw+cFUwNyeWIuSiJPTB3MVkkZe97+3jbn2/KBDr1UEYz3O5ryE+MFzasO9PHVDVdufxbRiiIF6Qo5IJ4RJCAqbNHGJ3OOckZc6K/86ekggPi8negCZZVETIrZLHaV1SdSq3c/fnpwNCIa6ZaIHXI5x4PB7wlKkYJVcG9mIkR5AgPvAQCakmbjLxjGRxtkytjaZiY8J2Nm1wwSwGELCl4u8jvQvRMOeGR3IGJE2kBaZi2903DJvVAsbyOvFA8NImYisiUQGbVnVICRHFPcihCG1Mk2B6yWxGh6PoKxGthjsrT60Py24MoNAoV6Qc5LWr6KhEq+it9j0Ii5+DuZzWPMDJ6Os8muZJ5dEBlq9Yo5HkdAgpl4n6d9X0BZ6RMEnLyDQl47HKaCM8p/uGKUnoMe3gsAFp1p4hocnaE48Bbn2XckRey/uXnLgSK0iyqyROS5dfwzxoh+3X2mnGQxsRISlCiADJZvXh2/DfXorqD1HEqddjuTw8rN6lWezAOVisevht+HhH3RzOG1KHj3vfJngbxQAKulTMfJ2idb/T8veg+JbL5PJZ/lXigeCr7oIISZE0XHQeqlSEQJZexiRAxMD5ejVVjTlplqYKkJ+m6KcgN8V0OzHMbnWy1DlZFi9h+cAzb00W9lv7Re1N7y1Qiq+3+5h4l07/41dpPqTTMeLTRWl4hzmq3j06zHtdHGLRFtsD55aOsQgqOQdpEHLV1CEtL4l9/KFR3dMz5PGyuNZrD85a3icplBfdohYE8vGClXAvkGFI3jcGr6WhfnlY7ktueVdETrl8IUA4Re6HoNHsQ6vDS74iTr+EKXV15Ra8++VP13NpL5EPCwEk27vcKgMSbbyWMdFAW82xVnH6WqnS6hQV/dVusnoJ4p/xvqz3Na1J4JXRcJ+7wAj3zwoOhWx48eVvb35NKLJQ3HeEcPesAFDkYh10x3mns+z7ywSB3DlO5iGCJlv7S/AIwitBEXrJeBzUWn2/iJ8KD2mbB4rTzseTvY4CulopLvezfAGA10OPi/yewnb8FZ+f+cJQ6vl8zy064f1Vwkg6B7Sxpx7xjeHhJJ0HY089LvtuRnOjOPYgGtm6IjS35+GjLbS2+aDEvekUXrMKjW0OaN5H0fA/2xHmpPOALh0w1SachgWQOYH/wZdTkLuKIndA+S7Ds6OvAm2Qj+cH9Vb3NAn5Qmhr80LBqXwe/7t9yW7I2vyQO4N4Mplvd0/CGRoEuLRbLM7YdCVEiBAhQoQIESJEiDeAiO/2lTzPRYvkvTT9+ZkQBKJRqa0eHW1uZ/kNiMbv2ubR0Wrtd8jbTKDsrmUnMpmMvU5u2BfRxrVlw/tE42qRPUg+OaSpcO3IWLXUCIF6Q26ulq54Q+ZogU0hPjmk1WnY5JuyoE0rwqAS40JrNm9IrCwvbUYjMQV/mR8Tsw1OUiSzA7SZNZfGiF1bYtoSkSmwmbdHayq3tYy9CSyhddf41MaPt9sH7aPjSdpEh9mWmrja2d2WBLPAG9Z3dn4VXhRJTfcxxE+MJ2kzfzBH1nTgOsHYpM0MZW33xRdu1rZ+YWwtsqfVf44naZNW6VF7gz+VzyZt4+XXbG5bKkbiS9Cm2l78pbShHWpc7iWiLUrbtfFUn0/C3KbfqH4F2tSbwhjYo21XlCWV61rU5HP0xV/4cWmDHNKcuk/qlAOctjXD9GI8kK5z42KBVF3z0ybijfim79hIv9U99l/R5otEE4FJQk6htl0rVHw+W0RSZWMbDjjerclc2ibsB+8p4tLGNxlhtF2RBk/Pv3/gnoXJrVnhWJYdk/A7ZNTYN+IveMOtXH0wV9YIdh0W7Hbp2woTqKh2Y0ESaduN5p+s+2QffpTvaL1hJ+CAtftj1D6TNgSdXjVZiLii37l2xd43cQNLSUVU2YlYuGfL2i0Y4z+VUbhS6bEECBjJgcH+YlKQdFh7L97QH5tEIovRxgJTg+p68/c1TxmBi8ZWlrEhmjtWxm23tipc4M+kzcC9umdweBoyTTJ1TedPY9RzY9fxEIF+/2qMTrEj24416oNcxOp7JRpoh36vzWmj120R2qTsiDR6GdtkXGblekxoqIkCG+/It/kyeSPyHAhtZnY9421UI1mXN1QbH03EWvN1kfgQtInOuuobF1HyohNxf2P2t8EmNRcgW6ubHsBZ89Fm/rZ9Pauur0fbDd8ZdsE/vA9Bm3TEbMeyLXI51KhEk8mtjH291aQWoDZptHTlbsaDBiTpz9KmAm2i06Q9JxLXW+us519su8KC5TujseHY4y0fgzYuq9ayjrOxZqk2nYrSCh2tfVRBhpSlHNp0+k7NEmxC2zO+DdOG2O9kbzrQc4FyaJEUXzSb3P5sdT0DI7BWjIo16gL3YX8E2kSHZYxkjx6jENmg+wg49AyLBlBTpOQ2n6ZNdBzH5AJEcigkrttM/E4UK9SgbBpAJYce3UKe3yqSud5wTKfWbBzBpHYcgQuQCu7inUh7hjb6OuMgyg91zuY2uQB1h4lWqUbeWwXzKdrwQ/QjuStSGK7cJY/YS5vk7Mwm6xnRHJY6DCZe1BscYWAoR6Q4LLJvx3J3xo7m706bwC67ufLbswMv2qWzMstEq0HLQbSm7dKmemCxAuRzWQJLUW2H9/yb9JxYMQUxy0tMLEKIbDp6aHsvyshQn/JtvKqYsCJXNYdlCRIb/64L9h5fO6dtfcuDa1aAfIY2UWCh0u34hgaFP0iQ2Lgymz5B+AFpEwujkK/a1g4RtWKFFzl8jv3aQxvoNs9GZshXJ5pFm2tR4z3jxRrpiPpZy1/L/IC0gXPxSqVMAscE7rcn0PT4tik5qfA8bRMSg7G4Zbg1J8vPzkekDYS5ao9CPHH7M2lbxye8CW3ND0xbZRptgils72bsjHsB5miS+i9uHZ+xEG3ZWdaG3PK5XfAl6/8ZbWw8vACrjtGGt6h3CkdNJpqsDZOHBDvrH+fCtLGQwH7BMXB2MkcfIyRwX2uTmourOVxrM+mGu2xwWAswAZI54upLRER2eZMrf5lyrkgqoGuVfgka7xkP7DezxAQrtog8rrORTeP6DSGtsAu9NiRIBf5kxmgzNjfYltiMq02Jy12wPHrIRLs7or9wdFPY8IIqkOdoY3IXDJltgyltbfJ/fIFRCn6igkB4I3GNFwgZbRuSILwfc+YGm3/qr43sxi73WyySbjcamxKSTImlp0R5Ovwzm1iXGtmtTCLCK5XTl2Ds/0Pz0Oauo9oreB94BEmp3WSVSomv36v2USFb2IzYNMU3C2ySblUM4/2yK1HgflhlZY4RbagGziaxflQr1FgNlWRQ0jafMJndP2u0BGKxH3/6gl+kMRdtAtpkv2FCxT3jN6r1h63fbPHBZWCgMCkSfwxCNdNIamJ9/e+Ev30z8OUkTt6INsR+4IxtJ1jzOpky0o0bWt0KhH09O5WfmzZRvPYUa/kveMPirK9KFLFW0BidnkD29hjXYZldN5KK2b8TV79BN7MXrjO+I2qk8grWNqUwCs6MxUip4C9TNrDtm9uj8b8jbXQqcta2GIl4ANK2PX4NjVVuFc7uuMRKNFmAW5A2waz8Gjcqe8tdTZAK6+O9N0j1AN24rROp11sC1TKssNZYEyp/R7dWocqVlXBnjb3+Y7QmZ2w33cK+mrA2ec1m+o1aib+Utl0Lv7FVlzbVxg2WR+WJaCUyKozbiVXPLb2Sc+S6i0jGam7Q+zHNtQYf/3vShofTbFiNDF7Rc1ZXMFbJnBORs72mNizLaqhrNdNbOjXRjz/r5Ii9u+24S6gmPd2PVWIxZo29de2HvR9bp5PM2lWE9JxY2x7fHhTGs3JjW/hYc2fD3UfUKOxcZxoN9ebofcWbKBlCxSHrx+L4baOgkAwnm82C1PDXm/GRSjZbQci7MG9Ovwt17KDp/7Q/YYKef9PvnMhEJITwlwqGdykZLzObaMrH3xxPlEbFmXXT2UdeYTgze367bw0RIkSIECFChAgRIkSIECFChAgRIkSIECFChJjA/wMD8FbUG0Ah0gAAAABJRU5ErkJggg==",
    description:
      "useEffect is one of the most essential hooks in React. It's used for handling side effects in functional components. Side effects in React refer to operations that occur outside the typical flow of component rendering, such as data fetching, DOM manipulation, and subscribing to event listeners. useEffect allows you to manage these side effects and keep your component's behavior consistent and predictable.The function: This is where you place the code for your side effect, like data fetching, subscriptions, or DOM manipulation.The dependencies array (optional): It's an array of values that the effect depends on. If any of these values change between renders, the effect will re-run. If you omit this array, the effect runs after every render.",
    authorName: "M.Rafiul Alam",
    authorImg: "https://i.ibb.co/Yf3ygXM/FB-IMG-1664715000463.jpg",
    authorDesignation: "Full Stack Developer",
  },
];
const Blogs = () => {
  return (
    <div id="blogs" className="max-w-[1000px] mx-auto ">
      <h2 className="text-3xl border-b-2 mb-4">Blogs </h2>
      <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {blogs.map((item) => (
          <div
            key={item.id}
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img class="rounded-t-lg" src={item.blogimg} alt="dsc" />
            </a>
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description.slice(0, 125)}...{" "}
                <Link to="/blog-detail" className="text-blue-600">
                  read more
                </Link>
              </p>
              <div className="flex justify-around items-center my-2">
                <div>
                  <img
                    className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src={item.authorImg}
                  ></img>
                </div>
                <div>
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.authorName}
                  </h5>
                  <h6 className=" text-sm font-semibold tracking-tight text-gray-600 dark:text-white">
                    {item.authorDesignation}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
