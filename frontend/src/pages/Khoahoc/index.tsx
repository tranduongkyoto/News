import { useQuery } from "@apollo/client";
import { Box, Button, Image, InfiniteScroll, Text, TextInput } from "grommet";
import React from "react";
import { getKhoahoc, getThethao } from "../../graphql/queries";

const Khoahoc = () => {
    const [value, setValue] = React.useState('');
    const { loading, error, data } = useQuery(getKhoahoc);
    var khoahoc = () => {
        if (!data || !data.khoahoc) {
            return [];
        }

        return data.khoahoc;
    };
    var khoahocFilter = khoahoc();
    if (value !== '') {
        khoahocFilter = khoahoc().filter((item: any) => {
            return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        })
    }
    const recommend = ['NASA', 'Robot', 'Hải ly', 'Viking', 'Nhiệt độ', 'Hoá thạch', 'Space X'];
    return (
        <div>
            {
                loading ?
                    " "
                    : <Box
                        direction={"column"}
                        align="center"
                    >
                        <Box
                            margin="small"
                        >
                            <TextInput
                                placeholder="Nhập từ khoá bạn muốn tìm"
                                value={value}
                                onChange={event => {
                                    setValue(event.target.value);
                                }
                                }
                            />
                        </Box>
                        <Box width="large" direction="row" overflow="auto">
                            <InfiniteScroll
                                items={recommend}
                            >
                                {(item: any) => (
                                    <Box
                                        flex={false}
                                        pad="small"
                                        key={item}
                                    >
                                        <Button
                                            label={item}
                                            onClick={() => {
                                                setValue(item);
                                            }}
                                            primary
                                        >
                                            {item.name}
                                        </Button>
                                    </Box>
                                )}
                            </InfiniteScroll>
                        </Box>
                        {
                            khoahocFilter.map((item: any) => {
                                return (
                                    <Box
                                        direction="row"
                                        height="200px"
                                        key={item.id}
                                    >
                                        <Box
                                            height="150px"
                                            width="250px"
                                        >
                                            <Image
                                                fit="cover"
                                                src={item.img}
                                            />
                                        </Box>

                                        <Box
                                            direction="column"
                                        >
                                            <Box
                                                height="xsmall"
                                                width="medium"
                                            >
                                                <a
                                                    href={`${item.href}`}
                                                    target="_blank"
                                                    style={{ textDecoration: "none" }}
                                                >
                                                    {item.title}
                                                </a>
                                            </Box>

                                            <Box
                                                height="small"
                                                width="medium"
                                            >
                                                <Text
                                                    size="small"
                                                >
                                                    {item.des}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>
            }
        </div >
    );
}

export default Khoahoc;