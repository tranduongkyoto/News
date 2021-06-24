import { useQuery } from "@apollo/client";
import { Box, Button, Image, InfiniteScroll, Text, TextInput } from "grommet";
import React from "react";
import { getKinhdoanh, getThethao } from "../../graphql/queries";

const Thethao = () => {
    const [value, setValue] = React.useState('');
    const { loading, error, data } = useQuery(getKinhdoanh);
    var kinhdoanh = () => {
        if (!data || !data.kinhdoanh) {
            return [];
        }

        return data.kinhdoanh;
    };
    var kinhdoanhFilter = kinhdoanh();
    if (value !== '') {
        kinhdoanhFilter = kinhdoanh().filter((item: any) => {
            return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        })
    }
    const recommend = ['Phố Wall', 'Chứng khoán', 'Bất động sản', 'Xuất khẩu', 'Bank', 'FPT', 'Giá vàng'];
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
                            kinhdoanhFilter.map((item: any) => {
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

export default Thethao;